import { Extension } from '@tiptap/core'
import Suggestion from '@tiptap/suggestion'
import { ReactRenderer } from '@tiptap/react'
import tippy from 'tippy.js'
import SlashCommandList from './SlashCommandList'

// A Notion/WordPress-block-editor-style "/" command palette — typing "/"
// opens a floating menu of block types; arrow keys, Enter, or a click pick
// one, which replaces the typed "/query" with that block. Pure editing UX,
// not a new document node/mark type, so — unlike Image/TaskList in
// richContentExtensions.js — this only ever gets added to PostEditor's own
// editor, never to the public read-only renderer's extension list.
//
// getItems is called fresh on every keystroke rather than passed a static
// array, so it can close over PostEditor's latest openImagePicker without
// this extension needing to be recreated (the editor itself is only
// constructed once — see PostEditor.js's useEditor([]) call).
export function createSlashCommandExtension(getItems) {
	return Extension.create({
		name: 'slashCommand',

		addOptions() {
			return {
				suggestion: {
					char: '/',
					startOfLine: false,
					command: ({ editor, range, props }) => {
						props.command({ editor, range })
					},
				},
			}
		},

		addProseMirrorPlugins() {
			return [
				Suggestion({
					editor: this.editor,
					...this.options.suggestion,
					items: ({ query }) => {
						const all = getItems()
						if (!query) return all
						return all.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
					},
					render: () => {
						let component
						let popup

						return {
							onStart: (props) => {
								component = new ReactRenderer(SlashCommandList, {
									props: {
										items: props.items,
										command: (item) => item.command({ editor: props.editor, range: props.range }),
									},
									editor: props.editor,
								})
								if (!props.clientRect) return

								popup = tippy('body', {
									getReferenceClientRect: props.clientRect,
									appendTo: () => document.body,
									content: component.element,
									showOnCreate: true,
									interactive: true,
									trigger: 'manual',
									placement: 'bottom-start',
								})
							},
							onUpdate: (props) => {
								component.updateProps({
									items: props.items,
									command: (item) => item.command({ editor: props.editor, range: props.range }),
								})
								if (!props.clientRect) return
								popup?.[0]?.setProps({ getReferenceClientRect: props.clientRect })
							},
							onKeyDown: (props) => {
								if (props.event.key === 'Escape') {
									popup?.[0]?.hide()
									return true
								}
								return component.ref?.onKeyDown(props) ?? false
							},
							onExit: () => {
								popup?.[0]?.destroy?.()
								component.destroy()
							},
						}
					},
				}),
			]
		},
	})
}
