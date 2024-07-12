'use client'

import Editor from "@monaco-editor/react"
import { useRef, useState } from "react"
import { LanguageSelector } from "../languageSelector/LanguageSelector"
import { Container_main_text, ContainerEditor, ContainerMain, ContainerRes, Main_Code } from "./style"
import { Return } from "../return/Return"
import { QUESTIONS } from '../questions'
import { Table_text } from "../table_text/Table_text"


export const CodeEditor = ({ params }) => {
    const editorRef = useRef()
    const [value, setValeu] = useState<string>()
    const [language, setLanguage] = useState<string>('javascript')

    const onMount = (editor: any) => {
        editorRef.current = editor;
        editor.focus()
    }

    const onSelectLanguage = (language: string) => {
        setLanguage(language)
        setValeu(QUESTIONS[params][language])
    }

    return (
        <Main_Code>
            <Container_main_text>
                <Table_text question={QUESTIONS[params].question} responseJS="" responseTS="" methods="" />
            </Container_main_text>
            <ContainerMain>
                <ContainerEditor>
                    <div style={{borderBottom:'2px solid #fff'}}>
                        <LanguageSelector languageType={language} onSelect={onSelectLanguage} />
                    </div>
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
                <Return editorRef={editorRef} language={language} />
            </ContainerMain>
        </Main_Code>
    )
}

