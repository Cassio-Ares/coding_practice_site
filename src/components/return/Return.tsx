'use client'
import { useState } from 'react'
import { executeCode } from '../api.js'



export const Return = ({ editorRef, language }) => {
    const [outPut, setOutPut] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;

        try {
            setIsLoading(true)
            const { run: result } = await executeCode(language, sourceCode);
            setOutPut(result.output)
        } catch (error) {
            console.log(error.message)
            // alert(
            //     title: "An error occurred.",
            //     description: error.message || "Unable to run code.",
            //     status: "error",
            //     duration: 6000,
            // )  To do 

        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            OutPut
            <button onClick={runCode} disabled={isLoading}>
                {isLoading ? 'Running...' : 'Run Code'}
            </button>
            <div>
                {
                    outPut ? outPut : "Click 'Run Code' to see the output here"
                }
            </div>

        </div>
    )
}
