import styled from "@emotion/styled";

export const Btn = styled.div`
  position: relative;
  display: inline-block;
  padding: 15px;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.8s; 
  text-decoration: none;
    background: #000;
    box-shadow: 5px 5px 10px rgba(123, 38, 102, 0.5); 
  &:hover {
   background: #6B0C4C;
   span {
      background: linear-gradient(360deg, transparent, #fff);
  
  }
  }
`;

export const Top = styled.span`
 position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background: linear-gradient(360deg, transparent, #6B0C4C);
  animation: animate1 1s linear infinite;
  
  @keyframes animate1 {
    0% {
      left: -100%; 
    }
    50%,
    100% {
      left: 100%; 
    }
  }
`;

export const Left = styled.span`
 position:absolute;
  top: -100%;
  right: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #6B0C4C);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;

  @keyframes animate2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }
`;

export const Rigth = styled.span`
 position:absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(360deg, transparent, #6B0C4C);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;

  @keyframes animate3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }
`;

export const Botton = styled.span`
 position:absolute;
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #6B0C4C);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;

  @keyframes animate4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
`;
