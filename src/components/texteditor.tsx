import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { FaBold, FaItalic, FaHeading } from 'react-icons/fa'

const TextEditor: React.FC = () => {
  const [editorHtml, setEditorHtml] = useState<string>('')

  function handleChange(value: string) {
    setEditorHtml(value)
  }

  const formats: string[] = [
    'header', 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link', 'blockquote', 'code-block', 'align'
  ]

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }, { 'font': [] }],
      [{ 'align': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'blockquote', 'code-block'],
    ]
  }

  return (
    <div className="editor-container" style={{ margin: '20px' }}>
      <div className="editor-toolbar">
        <button
          onClick={() => document.execCommand('bold')}
          className="toolbar-button"
        >
          <FaBold />
        </button>
        <button
          onClick={() => document.execCommand('italic')}
          className="toolbar-button"
        >
          <FaItalic />
        </button>
        <button
          onClick={() => document.execCommand('formatBlock', false, 'h1')}
          className="toolbar-button"
        >
          <FaHeading />
        </button>
      </div>

      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        theme="snow"
        style={{ height: '300px', border: '1px solid #ccc', padding: '10px' }}
      />
    </div>
  )
}

export default TextEditor
