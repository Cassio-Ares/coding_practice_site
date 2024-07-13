import { CodeEditor } from "@/components/codeEditor/CodeEditor";
import { Table_text } from "@/components/table_text/Table_text";

interface CodeProps{
    params:{
        id:number;
    }
}

export const CodeQuestionid = ({params}:CodeProps) =>{

    return (
        <div> 
           <Table_text question="" responseJS="" responseTS="" methods="" /> 
         <CodeEditor params={params.id}/>
        </div>
    )
}

export default CodeQuestionid; 

