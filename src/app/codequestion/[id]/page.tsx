import { CodeEditor } from "@/components/codeEditor/CodeEditor";
import { Table_text } from "@/components/table_text/Table_text";
import './styles.css';



export const CodeQuestionid = ({params}) =>{

    return (
        <div className="container_codeQuestion"> 
           <Table_text params={params.id} /> 
           <CodeEditor params={params.id}/>
        </div>
    )
}

export default CodeQuestionid; 

