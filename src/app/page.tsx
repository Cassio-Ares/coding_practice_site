import { CodeEditor } from "@/components/codeEditor/CodeEditor";
import styles from "./page.module.css";
import { Table_text } from "@/components/table_text/Table_text";
import { QuestionOneTest } from "@/components/questions/QuestionOneTest";
import { Pg_entrada } from "@/components/pg_entrada/pg/Pg_Entrada";



export default function Home() {
  return (
    <main className={styles.main}>
      <Pg_entrada/>
    </main>
  );
}
