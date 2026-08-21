import { useEffect, useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import { CATEGORIES } from '../../constants/categories'
import { richContentExtensions } from '../../constants/richContentExtensions'
import styles from './PostEditor.module.css'

function slugify(text) {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
}

// Formatting toolbar driven by the same StarterKit capabilities
// richContentExtensions.js declares — no button exists here for something
// the shared schema doesn't actually support.
const TOOLBAR_ITEMS = [
	{ label: 'Bold', run: (editor) => editor.chain().focus().toggleBold().run(), isActive: (editor) => editor.isActive('bold') },
	{ label: 'Italic', run: (editor) => editor.chain().focus().toggleItalic().run(), isActive: (editor) => editor.isActive('italic') },
	{ label: 'Strike', run: (editor) => editor.chain().focus().toggleStrike().run(), isActive: (editor) => editor.isActive('strike') },
	{
		label: 'H2',
		run: (editor) => editor.chain().focus().toggleHeading({ level: 2 }).run(),
		isActive: (editor) => editor.isActive('heading', { level: 2 }),
	},
	{
		label: 'H3',
		run: (editor) => editor.chain().focus().toggleHeading({ level: 3 }).run(),
		isActive: (editor) => editor.isActive('heading', { level: 3 }),
	},
	{ label: 'Bullet List', run: (editor) => editor.chain().focus().toggleBulletList().run(), isActive: (editor) => editor.isActive('bulletList') },
	{ label: 'Ordered List', run: (editor) => editor.chain().focus().toggleOrderedList().run(), isActive: (editor) => editor.isActive('orderedList') },
	{ label: 'Quote', run: (editor) => editor.chain().focus().toggleBlockquote().run(), isActive: (editor) => editor.isActive('blockquote') },
]

// The single shared editor integration point for both /cms/posts/new and
// /cms/posts/:id/edit — both wrap this component identically. `value.content`
// is read once as the editor's initial content ([] deps below — recreating
// the editor on every parent re-render would reset cursor position and undo
// history); after mount the editor owns its own live state via ProseMirror
// and only pushes changes up through onUpdate, the same "uncontrolled after
// initial value" model every other field here already follows.
function PostEditor({ value, onChange, onSave, disabled = false }) {
	const [slugTouched, setSlugTouched] = useState(Boolean(value.slug))

	const editor = useEditor(
		{
			extensions: richContentExtensions,
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

	return (
		<div className={styles.editor}>
			<label className={styles.field}>
				<span className={styles.label}>Title</span>
				<input className={styles.input} value={value.title} onChange={handleTitleChange} disabled={disabled} />
			</label>

			<label className={styles.field}>
				<span className={styles.label}>Slug</span>
				<input className={styles.input} value={value.slug} onChange={handleSlugChange} disabled={disabled} />
				{!slugTouched && <span className={styles.label}>Auto-filled from title until you edit it</span>}
			</label>

			<label className={styles.field}>
				<span className={styles.label}>Excerpt</span>
				<textarea
					className={styles.textarea}
					rows={2}
					value={value.excerpt}
					onChange={handleField('excerpt')}
					disabled={disabled}
				/>
			</label>

			<label className={styles.field}>
				<span className={styles.label}>Featured image URL</span>
				<input
					className={styles.input}
					value={value.featuredImage || ''}
					onChange={(e) => onChange({ featuredImage: e.target.value || null })}
					disabled={disabled}
					placeholder='Media upload arrives with a future mediaService'
				/>
			</label>

			<fieldset className={styles.field}>
				<legend className={styles.label}>Categories</legend>
				<div className={styles.categoryList}>
					{CATEGORIES.map((category) => (
						<label key={category.id} className={styles.categoryOption}>
							<input
								type='checkbox'
								checked={value.categoryIds.includes(category.id)}
								onChange={() => toggleCategory(category.id)}
								disabled={disabled}
							/>
							{category.name}
						</label>
					))}
				</div>
			</fieldset>

			<div className={styles.field}>
				<span className={styles.label}>Content</span>
				<div className={styles.toolbar}>
					{TOOLBAR_ITEMS.map((item) => (
						<button
							key={item.label}
							type='button'
							className={editor && item.isActive(editor) ? styles.toolbarButtonActive : styles.toolbarButton}
							onClick={() => editor && item.run(editor)}
							disabled={disabled || !editor}>
							{item.label}
						</button>
					))}
					<button
						type='button'
						className={styles.toolbarButton}
						onClick={() => editor && editor.chain().focus().undo().run()}
						disabled={disabled || !editor}>
						Undo
					</button>
					<button
						type='button'
						className={styles.toolbarButton}
						onClick={() => editor && editor.chain().focus().redo().run()}
						disabled={disabled || !editor}>
						Redo
					</button>
				</div>
				<div className={styles.editorContent}>
					<EditorContent editor={editor} />
				</div>
			</div>

			<div className={styles.actions}>
				<button type='button' className={styles.saveButton} onClick={onSave} disabled={disabled}>
					{disabled ? 'Saving…' : 'Save'}
				</button>
			</div>
		</div>
	)
}

export default PostEditor
