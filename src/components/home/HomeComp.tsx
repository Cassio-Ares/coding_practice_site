'use client'
import * as S from './styled'

import * as React from 'react';
import { QUESTIONS } from '../questions';
import Link from 'next/link';


export const HomeComp = () => {
  return (
    <S.Container_home>
      <S.Container_text>
        <S.H1>Uma otima maneira para praticar JS e TS</S.H1>
        <S.H3>Site criado para se praticar logica, metodos e funções das linguagens JS e TS</S.H3>
        <S.Content_home>
          {
            QUESTIONS.map((question, id) => (
              <S.Accordion key={id} >
                <S.AccordionSummary
                  expandIcon={<S.ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  {question.title}
                </S.AccordionSummary>
                <S.AccordionDetails>
                  {question.question}
                </S.AccordionDetails>
                <S.AccordionActions>
                  <Link href={`/codequestion/${id}`}>
                    <S.Button >Ir para o Desafio</S.Button>
                  </Link>

                </S.AccordionActions>
              </S.Accordion>
            ))
          }

        </S.Content_home>
      </S.Container_text>
    </S.Container_home>

  );
}