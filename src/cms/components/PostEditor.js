import { useEffect, useRef, useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import { BubbleMenu } from '@tiptap/react/menus'
import Placeholder from '@tiptap/extension-placeholder'
import { Bold, Italic, Underline, Strikethrough, Code, Link2, Undo2, Redo2, Plus, ImagePlus, X, Loader2 } from 'lucide-react'
import { richContentExtensions } from '../../constants/richContentExtensions'
import * as mediaService from '../../services/mediaService'
import * as postService from '../../services/postService'
import { createSlashCommandExtension } from './editor/SlashCommand'
import { getSlashCommandItems } from './editor/slashCommandItems'
import styles from './PostEditor.module.css'

function slugify(text) {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
}

// The floating toolbar that appears over a text selection — formatting is
// contextual now (Notion/Medium/Gutenberg's inline toolbar), not a
// permanently-visible button row.
const BUBBLE_ITEMS = [
	{ label: 'Bold', icon: Bold, run: (editor) => editor.chain().focus().toggleBold().run(), isActive: (editor) => editor.isActive('bold') },
	{ label: 'Italic', icon: Italic, run: (editor) => editor.chain().focus().toggleItalic().run(), isActive: (editor) => editor.isActive('italic') },
	{ label: 'Underline', icon: Underline, run: (editor) => editor.chain().focus().toggleUnderline().run(), isActive: (editor) => editor.isActive('underline') },
	{ label: 'Strikethrough', icon: Strikethrough, run: (editor) => editor.chain().focus().toggleStrike().run(), isActive: (editor) => editor.isActive('strike') },
	{ label: 'Code', icon: Code, run: (editor) => editor.chain().focus().toggleCode().run(), isActive: (editor) => editor.isActive('code') },
]

const MAX_IMAGE_BYTES = 4 * 1024 * 1024
const ALLOWED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif'])

// The single shared editor integration point for both /cms/posts/new and
// /cms/posts/:id/edit — both wrap this component identically. `value.content`
// is read once as the editor's initial content ([] deps below — recreating
// the editor on every parent re-render would reset cursor position and undo
// history); after mount the editor owns its own live state via ProseMirror
// and only pushes changes up through onUpdate, the same "uncontrolled after
// initial value" model every other field here already follows.
function PostEditor({ value, onChange, onSave, disabled = false }) {
	const [slugTouched, setSlugTouched] = useState(Boolean(value.slug))
	const [isUploadingImage, setIsUploadingImage] = useState(false)
	const [imageError, setImageError] = useState(null)
	const featuredImageInputRef = useRef(null)

	// Categories used to be a hardcoded constant (src/constants/categories.js)
	// — now sourced live from the API so a CMS user can actually add their
	// own instead of being stuck with whatever ships in the bundle.
	const [categories, setCategories] = useState([])
	const [newCategoryName, setNewCategoryName] = useState('')
	const [isSavingCategory, setIsSavingCategory] = useState(false)
	const [categoryError, setCategoryError] = useState(null)

	useEffect(() => {
		let cancelled = false
		postService
			.listCategories()
			.then((list) => {
				if (!cancelled) setCategories(list)
			})
			.catch((err) => {
				if (!cancelled) setCategoryError(err.message)
			})
		return () => {
			cancelled = true
		}
	}, [])

	const [tagInput, setTagInput] = useState('')

	// The slash-command "Image" entry and the body-image picker both need the
	// editor's *current* insertion point, but the extension itself is built
	// once (useEditor's [] deps) — a ref lets the closure always call today's
	// handler instead of the one that existed at construction time.
	const bodyImageInputRef = useRef(null)
	const [isUploadingBodyImage, setIsUploadingBodyImage] = useState(false)
	const openBodyImagePickerRef = useRef(() => {})
	openBodyImagePickerRef.current = () => bodyImageInputRef.current?.click()

	const editor = useEditor(
		{
			extensions: [
				...richContentExtensions,
				Placeholder.configure({ placeholder: "Type '/' for commands, or just start writing…" }),
				createSlashCommandExtension(() =>
					getSlashCommandItems({ openImagePicker: () => openBodyImagePickerRef.current() }),
				),
			],
			content: value.content || '',
			editable: !disabled,
			onUpdate: ({ editor }) => onChange({ content: editor.getJSON() }),
		},
		[],
	)

	// editable isn't reactive to prop changes after construction — re-assert
	// it explicitly, same as every other field's disabled handling.
	useEffect(() => {
		if (editor) editor.setEditable(!disabled)
	}, [editor, disabled])

	const handleField = (field) => (e) => {
		onChange({ [field]: e.target.value })
	}

	const handleTitleChange = (e) => {
		const title = e.target.value
		if (slugTouched) {
			onChange({ title })
		} else {
			onChange({ title, slug: slugify(title) })
		}
	}

	const handleSlugChange = (e) => {
		setSlugTouched(true)
		onChange({ slug: e.target.value })
	}

	const toggleCategory = (categoryId) => {
		const has = value.categoryIds.includes(categoryId)
		const next = has ? value.categoryIds.filter((id) => id !== categoryId) : [...value.categoryIds, categoryId]
		onChange({ categoryIds: next })
	}

	const handleAddCategory = async () => {
		const name = newCategoryName.trim()
		if (!name) return
		setCategoryError(null)
		setIsSavingCategory(true)
		try {
			const category = await postService.createCategory(name)
			setCategories((prev) => [...prev, category].sort((a, b) => a.name.localeCompare(b.name)))
			onChange({ categoryIds: [...value.categoryIds, category.id] })
			setNewCategoryName('')
		} catch (err) {
			setCategoryError(err.message || 'Could not create category.')
		} finally {
			setIsSavingCategory(false)
		}
	}

	const handleNewCategoryKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			handleAddCategory()
		}
	}

	const handleDeleteCategory = async (categoryId) => {
		setCategoryError(null)
		try {
			await postService.deleteCategory(categoryId)
			setCategories((prev) => prev.filter((c) => c.id !== categoryId))
			if (value.categoryIds.includes(categoryId)) {
				onChange({ categoryIds: value.categoryIds.filter((id) => id !== categoryId) })
			}
		} catch (err) {
			setCategoryError(err.message || 'Could not delete category.')
		}
	}

	// ---- Tags (freeform, no separate registry — same field-of-strings model
	// as WordPress/Ghost/Substack, unlike Categories which are a managed list) ----

	const addTag = (raw) => {
		const tag = raw.trim()
		if (!tag || value.tags.includes(tag)) return
		onChange({ tags: [...value.tags, tag] })
	}

	const handleTagInputKeyDown = (e) => {
		if (e.key === 'Enter' || e.key === ',') {
			e.preventDefault()
			addTag(tagInput)
			setTagInput('')
		} else if (e.key === 'Backspace' && tagInput === '' && value.tags.length > 0) {
			onChange({ tags: value.tags.slice(0, -1) })
		}
	}

	const handleTagInputBlur = () => {
		if (tagInput.trim()) {
			addTag(tagInput)
			setTagInput('')
		}
	}

	const handleRemoveTag = (tag) => {
		onChange({ tags: value.tags.filter((t) => t !== tag) })
	}

	const handleSetLink = () => {
		if (!editor) return
		const existing = editor.getAttributes('link').href || ''
		const url = window.prompt('Link URL', existing)
		if (url === null) return
		if (url === '') {
			editor.chain().focus().extendMarkRange('link').unsetLink().run()
			return
		}
		editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
	}

	const handleInsertBlockClick = () => {
		editor?.chain().focus().insertContent('/').run()
	}

	// ---- Featured image (sidebar) ----

	const handleFeaturedImageButtonClick = () => featuredImageInputRef.current?.click()

	// Uploads straight to Blob storage via mediaService and stores the
	// resulting URL — the only thing featuredImage has ever held (see
	// api/media/upload.js), so nothing downstream (public renderers, the
	// posts API) needs to know a file was involved at all.
	const handleFeaturedImageFileSelected = async (e) => {
		const file = e.target.files?.[0]
		e.target.value = ''
		if (!file) return

		setImageError(null)
		if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
			setImageError('Use JPEG, PNG, WebP, or GIF.')
			return
		}
		if (file.size > MAX_IMAGE_BYTES) {
			setImageError('Image must be under 4MB.')
			return
		}

		setIsUploadingImage(true)
		try {
			const { url } = await mediaService.uploadImage(file)
			onChange({ featuredImage: url })
		} catch (err) {
			setImageError(err.message || 'Upload failed.')
		} finally {
			setIsUploadingImage(false)
		}
	}

	const handleRemoveFeaturedImage = () => {
		onChange({ featuredImage: null })
		setImageError(null)
	}

	// ---- Body image (slash command "Image") ----

	const handleBodyImageFileSelected = async (e) => {
		const file = e.target.files?.[0]
		e.target.value = ''
		if (!file || !editor) return

		setImageError(null)
		if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
			setImageError('Use JPEG, PNG, WebP, or GIF.')
			return
		}
		if (file.size > MAX_IMAGE_BYTES) {
			setImageError('Image must be under 4MB.')
			return
		}

		setIsUploadingBodyImage(true)
		try {
			const { url } = await mediaService.uploadImage(file)
			editor.chain().focus().setImage({ src: url }).run()
		} catch (err) {
			setImageError(err.message || 'Upload failed.')
		} finally {
			setIsUploadingBodyImage(false)
		}
	}

	return (
		<div className={styles.editor}>
			<div className={styles.mainColumn}>
				<input
					className={styles.titleInput}
					value={value.title}
					onChange={handleTitleChange}
					disabled={disabled}
					placeholder='Add title'
				/>

				<div className={styles.contentField}>
					<div className={styles.miniToolbar}>
						<button
							type='button'
							title='Insert block'
							aria-label='Insert block'
							className={styles.insertButton}
							onClick={handleInsertBlockClick}
							disabled={disabled || !editor}>
							<Plus size={16} strokeWidth={2} />
							<span>Insert</span>
						</button>
						<span className={styles.miniToolbarHint}>Type “/” for headings, lists, images, and more</span>
						<span className={styles.toolbarSpacer} />
						{isUploadingBodyImage && (
							<span className={styles.uploadingHint}>
								<Loader2 size={14} className={styles.spin} /> Uploading image…
							</span>
						)}
						<button
							type='button'
							title='Undo'
							aria-label='Undo'
							className={styles.toolbarButton}
							onClick={() => editor && editor.chain().focus().undo().run()}
							disabled={disabled || !editor}>
							<Undo2 size={16} strokeWidth={2} />
						</button>
						<button
							type='button'
							title='Redo'
							aria-label='Redo'
							className={styles.toolbarButton}
							onClick={() => editor && editor.chain().focus().redo().run()}
							disabled={disabled || !editor}>
							<Redo2 size={16} strokeWidth={2} />
						</button>
					</div>

					{editor && (
						<BubbleMenu editor={editor} className={styles.bubbleMenu}>
							{BUBBLE_ITEMS.map((item) => {
								const Icon = item.icon
								return (
									<button
										key={item.label}
										type='button'
										title={item.label}
										aria-label={item.label}
										className={item.isActive(editor) ? styles.bubbleButtonActive : styles.bubbleButton}
										onClick={() => item.run(editor)}>
										<Icon size={14} strokeWidth={2} />
									</button>
								)
							})}
							<span className={styles.bubbleDivider} />
							<button
								type='button'
								title='Link'
								aria-label='Link'
								className={editor.isActive('link') ? styles.bubbleButtonActive : styles.bubbleButton}
								onClick={handleSetLink}>
								<Link2 size={14} strokeWidth={2} />
							</button>
						</BubbleMenu>
					)}

					<input
						ref={bodyImageInputRef}
						type='file'
						accept='image/jpeg,image/png,image/webp,image/gif'
						className={styles.hiddenFileInput}
						onChange={handleBodyImageFileSelected}
						disabled={disabled || isUploadingBodyImage}
					/>

					<div className={styles.editorContent}>
						<EditorContent editor={editor} />
					</div>
				</div>
			</div>

			<div className={styles.sidebar}>
				<div className={styles.panel}>
					<span className={styles.panelTitle}>Featured image</span>
					<input
						ref={featuredImageInputRef}
						type='file'
						accept='image/jpeg,image/png,image/webp,image/gif'
						className={styles.hiddenFileInput}
						onChange={handleFeaturedImageFileSelected}
						disabled={disabled || isUploadingImage}
					/>
					{value.featuredImage ? (
						<div className={styles.imagePreviewWrap}>
							<img src={value.featuredImage} alt='' className={styles.imagePreview} />
							<div className={styles.imageActions}>
								<button
									type='button'
									className={styles.imageActionButton}
									onClick={handleFeaturedImageButtonClick}
									disabled={disabled || isUploadingImage}>
									{isUploadingImage ? <Loader2 size={14} className={styles.spin} /> : 'Replace'}
								</button>
								<button
									type='button'
									className={styles.imageActionButtonDanger}
									onClick={handleRemoveFeaturedImage}
									disabled={disabled || isUploadingImage}>
									<X size={14} strokeWidth={2} />
									Remove
								</button>
							</div>
						</div>
					) : (
						<button
							type='button'
							className={styles.imageDropzone}
							onClick={handleFeaturedImageButtonClick}
							disabled={disabled || isUploadingImage}>
							{isUploadingImage ? (
								<>
									<Loader2 size={20} className={styles.spin} />
									<span>Uploading…</span>
								</>
							) : (
								<>
									<ImagePlus size={20} strokeWidth={1.75} />
									<span>Click to upload</span>
								</>
							)}
						</button>
					)}
					{imageError && <span className={styles.fieldError}>{imageError}</span>}
				</div>

				<div className={styles.panel}>
					<label className={styles.field}>
						<span className={styles.panelTitle}>Slug</span>
						<input className={styles.input} value={value.slug} onChange={handleSlugChange} disabled={disabled} />
						{!slugTouched && <span className={styles.hint}>Auto-filled from title until you edit it</span>}
					</label>
				</div>

				<div className={styles.panel}>
					<label className={styles.field}>
						<span className={styles.panelTitle}>Excerpt</span>
						<textarea
							className={styles.textarea}
							rows={3}
							value={value.excerpt}
							onChange={handleField('excerpt')}
							disabled={disabled}
						/>
					</label>
				</div>

				<fieldset className={styles.panel}>
					<legend className={styles.panelTitle}>Categories</legend>
					<div className={styles.categoryList}>
						{categories.map((category) => (
							<div key={category.id} className={styles.categoryRow}>
								<label className={styles.categoryOption}>
									<input
										type='checkbox'
										checked={value.categoryIds.includes(category.id)}
										onChange={() => toggleCategory(category.id)}
										disabled={disabled}
									/>
									{category.name}
								</label>
								<button
									type='button'
									className={styles.categoryDeleteButton}
									title={`Delete "${category.name}"`}
									aria-label={`Delete category ${category.name}`}
									onClick={() => handleDeleteCategory(category.id)}
									disabled={disabled}>
									<X size={12} strokeWidth={2} />
								</button>
							</div>
						))}
						{categories.length === 0 && <span className={styles.hint}>No categories yet - add one below.</span>}
					</div>
					<div className={styles.addCategoryRow}>
						<input
							className={styles.input}
							value={newCategoryName}
							onChange={(e) => setNewCategoryName(e.target.value)}
							onKeyDown={handleNewCategoryKeyDown}
							placeholder='New category name'
							disabled={disabled || isSavingCategory}
						/>
						<button
							type='button'
							className={styles.addCategoryButton}
							onClick={handleAddCategory}
							disabled={disabled || isSavingCategory || !newCategoryName.trim()}>
							{isSavingCategory ? <Loader2 size={14} className={styles.spin} /> : <Plus size={14} strokeWidth={2} />}
						</button>
					</div>
					{categoryError && <span className={styles.fieldError}>{categoryError}</span>}
				</fieldset>

				<div className={styles.panel}>
					<span className={styles.panelTitle}>Tags</span>
					<div className={styles.tagInputWrap}>
						{value.tags.map((tag) => (
							<span key={tag} className={styles.tagChip}>
								{tag}
								<button
									type='button'
									aria-label={`Remove tag ${tag}`}
									onClick={() => handleRemoveTag(tag)}
									disabled={disabled}>
									<X size={11} strokeWidth={2} />
								</button>
							</span>
						))}
						<input
							className={styles.tagInput}
							value={tagInput}
							onChange={(e) => setTagInput(e.target.value)}
							onKeyDown={handleTagInputKeyDown}
							onBlur={handleTagInputBlur}
							placeholder={value.tags.length === 0 ? 'Add tags, press Enter' : ''}
							disabled={disabled}
						/>
					</div>
					<span className={styles.hint}>Press Enter or comma to add a tag</span>
				</div>

				<div className={styles.panel}>
					<button type='button' className={styles.saveButton} onClick={onSave} disabled={disabled}>
						{disabled ? 'Saving…' : 'Save'}
					</button>
				</div>
			</div>
		</div>
	)
}

export default PostEditor
