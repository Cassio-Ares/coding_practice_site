'use client'

import { Container_text } from "./styles"

export const QuestionText = ({ data }) => {

    const getTitleAndQuestion = (data) => {
        return {
            title: data?.title,
            question: data?.question
        };
    };

    const { title, question } = getTitleAndQuestion(data);

    return (
        <>
            <Container_text>
                <h3>
                 {title}
                </h3>
                <p>
                 {question}
                </p>
            </Container_text>
        </>

    )
}
