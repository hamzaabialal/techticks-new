import StarterKit from '@tiptap/starter-kit'

// The one TipTap schema shared by both the CMS editor (PostEditor.js) and the
// public read-only renderer (BlogPostContent.js). A ProseMirror document can
// only contain node/mark types this list defines — that's what makes storing
// content as JSON safe to render without sanitizing it: neither side can
// produce or read back a node type (e.g. a raw <script>) that isn't declared
// here. If the two sides ever used different extension lists, that guarantee
// would quietly stop holding, so there is exactly one list, not two.
export const richContentExtensions = [StarterKit]
