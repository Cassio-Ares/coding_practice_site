'use client'
import React from 'react'
import Editor, { Monaco } from "@monaco-editor/react"
import { ContainerEditor } from './styles'

interface PropsData{
    data: string[];
}

export const Answers = ({ data }:PropsData) => {
    console.log(typeof data)
    return (
        <>
        {
            data.map((solutions, index)=>(
                <ContainerEditor key={index}>
                <h4>Exemplo de solução {index + 1}</h4>
                < Editor
                    height=" 30vh"
                    theme="vs-dark"
                    language={'javascript'}
                    defaultValue={solutions}
                />
            </ContainerEditor>
            ))
        }   
        </>
    )
}
