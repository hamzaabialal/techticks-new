import { useEditor, EditorContent } from '@tiptap/react'
import { richContentExtensions } from '../constants/richContentExtensions'

// Read-only render of a Post's rich content. Split into its own module (not
// inlined in BlogPostDetail.js) so it can be React.lazy-loaded — TipTap's
// bundle should only be fetched by visitors who actually open an individual
// post, never by the /blog listing or any other public page. Uses the same
// richContentExtensions.js schema PostEditor.js authors with, so nothing
// rendered here can be a node/mark type the editor couldn't have produced.
function BlogPostContent({ postId, content }) {
	const editor = useEditor(
		{
			extensions: richContentExtensions,
			content,
			editable: false,
			// TipTap's default editorProps set role="textbox" regardless of
			// `editable`, which misrepresents this as an interactive control to
			// assistive tech on a page nobody can edit. Overriding it to '' drops
			// the role entirely, letting the actual heading/paragraph/list
			// elements TipTap already renders carry the semantics themselves —
			// exactly what they'd do in any other read-only prose content.
			editorProps: {
				attributes: {
					role: '',
				},
			},
		},
		[postId],
	)

	return <EditorContent editor={editor} />
}

export default BlogPostContent
