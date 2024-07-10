'use client'
import * as S from './styles';
import { useRef, useState, MouseEvent } from 'react';
import { executeCode } from '../api.js';

export const Return = ({ editorRef, language }) => {
    const [outPut, setOutPut] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [height, setHeight] = useState<number>(100);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: MouseEvent) => {
        e.preventDefault();
        const startY = e.clientY;
        const startHeight = containerRef.current?.offsetHeight || 0;

        const onMouseMove = (moveEvent: MouseEvent) => {
            const newHeight = startHeight + (startY - moveEvent.clientY);
            if (newHeight > 0) {
                setHeight(newHeight);
            }
        };

        const onMouseUp = (): void => {
            document.removeEventListener('mousemove', onMouseMove as any);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove as any);
        document.addEventListener('mouseup', onMouseUp);
    };

    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;

        try {
            setIsLoading(true);
            const { run: result } = await executeCode(language, sourceCode);
            setOutPut(result.output);
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
        <S.Container_return
            ref={containerRef}
            className="resizable-container"
            style={{ height: `${height}px` }}
        >
            <S.Content
                onMouseDown={handleMouseDown}
            />
            <div className="content">
                {/* Conteúdo do container */}
            </div>
            <div>
                OutPut
                <button onClick={runCode} disabled={isLoading}>
                    {isLoading ? 'Running...' : 'Run Code'}
                </button>
                <div>
                    {outPut ? outPut : "Click 'Run Code' to see the output here"}
                </div>
            </div>
        </S.Container_return>
    );
};

{/* <div>
            OutPut
            <button onClick={runCode} disabled={isLoading}>
                {isLoading ? 'Running...' : 'Run Code'}
            </button>
            <div>
                {
                    outPut ? outPut : "Click 'Run Code' to see the output here"
                }
            </div>

        </div> */}