'use client'
import { ContainerText, FigureDiv, H1, Img, Span_btn, Text } from './style'
import { Btn_Start } from "../Btn/Btn_Start"
import { Container_bk } from "../container_bk/Container_bk"



export const Pg_entrada = () => {
  return (
    <Container_bk>
      <ContainerText>
         <H1> Ótima maneira de aprender e praticar Js!</H1>
      <Text>
        Desafios Engajadores para Desbloquear seu Potencial em JavaScript! 
        Mergulhe em uma série de desafios práticos desde o basico projetados
        para elevar suas habilidades em lógica de programação e métodos do JS. Comece agora e transforme sua forma de codificar!
      </Text>
      </ContainerText>
      <Span_btn>
        <Btn_Start/>
      </Span_btn>   
      <FigureDiv>
         <Img src={'./app.gif'} alt="apresentação do site"  />
      </FigureDiv> 
    </Container_bk>
  )
}
