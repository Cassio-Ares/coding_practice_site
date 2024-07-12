import { CodeEditor } from "@/components/codeEditor/CodeEditor";

export const CodeQuestionid = ({params}:any) =>{
    return (
        <div>
         <CodeEditor params={params.id}/>
        </div>
    )
}

export default CodeQuestionid;