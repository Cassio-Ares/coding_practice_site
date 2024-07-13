'use client'

import {  useState } from 'react';
import { executeCode } from '../api';
import {  Btn_Res, Container_Btn, Container_Res, Container_return } from './styles';
import { Monaco } from '@monaco-editor/react';

interface ReturnProps{
    editorRef:Monaco | null;
    language:string;
}

export const Return = ({ editorRef, language }) => {
    const [outPut, setOutPut] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;

        try {
            setIsLoading(true);
            const { run: result } = await executeCode(language, sourceCode);
            setOutPut(result.output);  // to do error não aceita ts???
        } catch (error) {
            console.log(error.message);
            // alert(
            //     title: "An error occurred.",
            //     description: error.message || "Unable to run code.",
            //     status: "error",
            //     duration: 6000,
            // )  To do 
        } finally {
            setIsLoading(false);
        }
    };

    return (
              <Container_return>
               <Container_Btn>
                  <Btn_Res onClick={runCode} disabled={isLoading}>
                    {isLoading ? 'Running...' : 'Run Code'}
                </Btn_Res>
               </Container_Btn>
               
                <Container_Res>
                    {outPut ? outPut : "Click 'Run Code' to see the output here"}
                </Container_Res>
            </Container_return>
    );
};

