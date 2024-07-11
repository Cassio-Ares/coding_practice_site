'use client'

import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react"
import { useRef, useState } from "react"
import { LanguageSelector } from "../languageSelector/LanguageSelector"
import { CODE_SNIPPETS } from "../language"
import {  ContainerEditor, ContainerMain, ContainerRes } from "./style"
import { Return } from "../return/Return"


export const CodeEditor = () => {  
    const editorRef = useRef()
    const [value, setValeu] = useState<string>()
    const [language, setLanguage] = useState<string>('javascript')

    const onMount = (editor: any) => { 
        editorRef.current = editor;
        editor.focus()
    }

    const onSelectLanguage = (language: string) => {
        setLanguage(language)
        setValeu(CODE_SNIPPETS[language]);
    }



    return (
        <ContainerMain>
            <ContainerEditor>
                <LanguageSelector languageType={language} onSelect={onSelectLanguage} />
                < Editor
                    height=" 75vh"
                    theme="vs-dark"
                    language={language}
                    defaultValue="// some comment"
                    onMount={
                        onMount
                    }
                    value={value}
                    onChange={(value: any) => setValeu(value)} />
            </ContainerEditor>
        
            <Return  editorRef={ editorRef} language={language}  />
          
        </ContainerMain>
    )
}

