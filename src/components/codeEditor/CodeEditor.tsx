'use client'

import Editor, { Monaco } from "@monaco-editor/react"
import { useRef, useState } from "react"
import { LanguageSelector } from "../languageSelector/LanguageSelector"
import { Container_select, ContainerRes, Main_Code } from "./style"
import { Return } from "../return/Return"
import { QUESTIONS } from '../questions'

interface CodeProps{
    params:string
}

export const CodeEditor = ({ params }:CodeProps) => {
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
            <Container_select>
                <LanguageSelector languageType={language} onSelect={onSelectLanguage} />
            </Container_select>
                < Editor
                    height=" 70vh"
                    theme="vs-dark"
                    language={language}
                    defaultValue={QUESTIONS[params][language]}
                    onMount={ onMount }
                    value={value}
                    onChange={(value: any) => setValeu(value)} />
            <ContainerRes>
                <Return editorRef={editorRef} language={language} />
            </ContainerRes>
        </Main_Code>
    )
}

