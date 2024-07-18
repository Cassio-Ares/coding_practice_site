'use client'
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Container_home, Container_text, Content_home, ExpandMoreIcon, H1, H3 } from './styled'

import { QUESTIONS } from '../questions';
import Link from 'next/link';

export const HomeComp: React.FC = () => {
  return (
    <Container_home>
      <Container_text>
        <H1>Uma ótima maneira para praticar JS</H1>
        <H3>Aproveite os desafios de lógica, métodos e funções da linguagem JS.</H3>
        <Content_home>
          {   
            QUESTIONS.map((question, id) => (
             <Accordion key={id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  {question.title}
                </AccordionSummary>
                <AccordionDetails>
                  {question.question}
                </AccordionDetails>
                <AccordionActions>
                  <Link href={`/codequestion/${id}`}>
                    <Button>Ir para o Desafio</Button>
                  </Link>
                </AccordionActions>
              </Accordion>
            ))
          }
        </Content_home>
      </Container_text>
    </Container_home>
  );
}
