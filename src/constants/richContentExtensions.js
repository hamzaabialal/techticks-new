import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'

// The one TipTap schema shared by both the CMS editor (PostEditor.js) and the
// public read-only renderer (BlogPostContent.js). A ProseMirror document can
// only contain node/mark types this list defines — that's what makes storing
// content as JSON safe to render without sanitizing it: neither side can
// produce or read back a node type (e.g. a raw <script>) that isn't declared
// here. If the two sides ever used different extension lists, that guarantee
// would quietly stop holding, so there is exactly one list, not two.
//
// StarterKit itself already includes Link, Underline, Bold, Italic, Strike,
// Code, Blockquote, CodeBlock, Heading, BulletList/OrderedList, and
// HorizontalRule (Tiptap 3's bundle) — Image and the two task-list nodes are
// the only content types this project adds on top.
//
// Extensions that only add editing-time UX (Placeholder, the slash-command
// menu, the selection bubble menu) are deliberately NOT here — they don't
// define document schema, so they belong solely in PostEditor.js's own
// editor, layered on top of this shared list.
export const richContentExtensions = [
	StarterKit,
	Image.configure({ HTMLAttributes: { class: 'rich-content-image' } }),
	TaskList,
	TaskItem.configure({ nested: true }),
]
