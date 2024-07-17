'use client'

import { Container_Methods, Description, Name, Syntax, Title, Usage } from './styles'


export const Methods = ({ data }) => {

    return (
        <>
            {
                data.map((method, index) => (
                    <Container_Methods key={index}>
                        <Name>{method.name}</Name>
                        <Description>
                            <Title>Descrição:</Title>
                            <p>
                                {method.description}
                            </p>
                        </Description>
                        <Syntax>
                            <Title>Sintaxe:</Title>
                            <p>
                                {method.syntax}
                            </p>
                        </Syntax>
                        <Usage>
                            <Title>Quando ou pq usar:</Title>
                            <p>
                                {method.usage}
                            </p>
                        </Usage>
                    </Container_Methods>
                ))
            }

        </>
    )
}
