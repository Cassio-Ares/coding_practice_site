import { CodeEditor } from "@/components/codeEditor/CodeEditor";
import { Table_text } from "@/components/table_text/Table_text";
import './styles.css';

interface CodeProps{
    params:{
        id:number;
    }
}

export const CodeQuestionid = ({params}:CodeProps) =>{

    return (
        <div className="container_codeQuestion"> 
           <Table_text question="" responseJS="" responseTS="" methods="" /> 
           <CodeEditor params={params.id}/>
        </div>
    )
}

export default CodeQuestionid; 

