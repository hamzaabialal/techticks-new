import { Heading2, Heading3, List, ListOrdered, ListChecks, Quote, Code2, ImagePlus, Minus, Pilcrow } from 'lucide-react'

// Builds the slash-command palette's item list. `openImagePicker` is a
// closure PostEditor.js supplies — image insertion needs to open a native
// file picker and upload asynchronously, which doesn't fit the synchronous
// editor.chain()...run() pattern every other command uses.
export function getSlashCommandItems({ openImagePicker }) {
	return [
		{
			title: 'Text',
			description: 'Just start writing plain text',
			icon: Pilcrow,
			command: ({ editor, range }) => editor.chain().focus().deleteRange(range).setParagraph().run(),
		},
		{
			title: 'Heading 2',
			description: 'Medium section heading',
			icon: Heading2,
			command: ({ editor, range }) =>
				editor.chain().focus().deleteRange(range).setNode('heading', { level: 2 }).run(),
		},
		{
			title: 'Heading 3',
			description: 'Small section heading',
			icon: Heading3,
			command: ({ editor, range }) =>
				editor.chain().focus().deleteRange(range).setNode('heading', { level: 3 }).run(),
		},
		{
			title: 'Bullet List',
			description: 'A simple bulleted list',
			icon: List,
			command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleBulletList().run(),
		},
		{
			title: 'Numbered List',
			description: 'A list with numbering',
			icon: ListOrdered,
			command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleOrderedList().run(),
		},
		{
			title: 'Checklist',
			description: 'Track tasks with checkboxes',
			icon: ListChecks,
			command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleTaskList().run(),
		},
		{
			title: 'Quote',
			description: 'Capture a quotation',
			icon: Quote,
			command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleBlockquote().run(),
		},
		{
			title: 'Code Block',
			description: 'A block for a code snippet',
			icon: Code2,
			command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleCodeBlock().run(),
		},
		{
			title: 'Image',
			description: 'Upload and embed an image',
			icon: ImagePlus,
			command: ({ editor, range }) => {
				editor.chain().focus().deleteRange(range).run()
				openImagePicker()
			},
		},
		{
			title: 'Divider',
			description: 'A horizontal rule',
			icon: Minus,
			command: ({ editor, range }) => editor.chain().focus().deleteRange(range).setHorizontalRule().run(),
		},
	]
}
