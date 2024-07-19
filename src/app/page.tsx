'use client'

import styles from "./page.module.css";
import { Pg_entrada } from "@/components/pg_entrada/pg/Pg_Entrada";



export default function Home() {
  return (
    <main className={styles.main}>
       <Pg_entrada/> 
    </main>
  );
}
