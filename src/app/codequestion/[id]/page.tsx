'use client'

import { CodeEditor } from "@/components/codeEditor/CodeEditor";
import { Table_text } from "@/components/table_text/Table_text";
import './styles.css';

interface ParamsPros{
  params:{
    id:string
  }
}

const CodeQuestionid = ({ params }:ParamsPros) => {
  const { id } = params;

  return (
    <div className="container_codeQuestion">
      <Table_text params={id} />
      <CodeEditor params={id} />
    </div>
  );
};

export default CodeQuestionid;
