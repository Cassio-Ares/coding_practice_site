'use client'
import React from 'react'
import Editor, { Monaco } from "@monaco-editor/react"
import { ContainerEditor } from './styles'


export const Answers = ({ data }) => {


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
