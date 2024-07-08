'use client'

import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react"
import { useRef, useState } from "react"
import { LanguageSelector } from "../languageSelector/LanguageSelector"


export const CodeEditor = () => {  // to do tipar 
    const editorRef = useRef()
    const [value, setValeu] = useState()
    const [language, setLanguage] = useState('javascript')

    const onMount = (editor:any) =>{ // faz com que ao abri a pagina ja crie um cursor para digitar no editor
        editorRef.current = editor;
        editor.focus()
    }

    const onSelectLanguage = (language:any) =>{
         setLanguage(language)
    }
  
    return (
        <div>
         <LanguageSelector languageType={language} onSelect={onSelectLanguage} /> 
            < Editor
                height=" 75vh"
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue="// some comment"
                onMount={
                    onMount
                }
                value={value}
                onChange={(value:any) => setValeu(value)}
            /> ;
        </div>
    )
}

//vs-dark é um theme é especifico do monaco