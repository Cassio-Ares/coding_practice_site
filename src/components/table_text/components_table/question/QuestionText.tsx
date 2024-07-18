'use client'

import { Question } from "@/components/questions";
import { Container_text } from "./styles"

interface PropsQuestion{
   title:string,
   questions:string
}


export const QuestionText = ({ title, questions }:PropsQuestion) => {


    return (
        <>
            <Container_text>
                <h3>
                 {title}
                </h3>
                <p>
                 {questions}
                </p>
            </Container_text>
        </>

    )
}
