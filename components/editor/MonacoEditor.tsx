"use client"
import dynamic from "next/dynamic"
import type * as Monaco from "monaco-editor"

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false })

interface Props {
    language: string,
    value: string,
    onChange: (value: string) => void,
    onMount?: (editor: Monaco.editor.IStandaloneCodeEditor) => void
}

export default function MonacoEditor({ language, value, onChange, onMount }: Props) {
    const handleEditorChange = (nextValue: string | undefined) => {
      onChange(nextValue ?? "")
    }

    return (
      <Editor
        height="100%"
        theme="vs-dark"
        language={language}
        value={value}
        onChange={handleEditorChange}
        onMount={onMount}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          lineNumbers: "on",
          wordWrap: "on",
          automaticLayout: true,
        }}
      />
    )
  }