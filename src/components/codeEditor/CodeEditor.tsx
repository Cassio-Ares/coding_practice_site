'use client'

import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react"
import { useRef, useState } from "react"
import { LanguageSelector } from "../languageSelector/LanguageSelector"
import { CODE_SNIPPETS } from "../language"
import { ContainerDiv, ContainerEditor, ContainerMain, ContainerRes } from "./stile"
import { Return } from "../return/Return"


export const CodeEditor = () => {  // to do tipar 
    const editorRef = useRef()
    const [value, setValeu] = useState()
    const [language, setLanguage] = useState('javascript')

    const onMount = (editor: any) => { // faz com que ao abri a pagina ja crie um cursor para digitar no editor
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
            <ContainerRes>
                <Return  editorRef={ editorRef} language={language}  />
            </ContainerRes>
            
        </ContainerMain>
    )
}

//vs-dark é um theme é especifico do monaco