import styled from "@emotion/styled";

export const Container_return = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  display: grid;
  grid-template-rows: 10% auto;
`;

export const Container_Btn = styled.div`
  border-radius: 5px;
  background: #333333;
  box-shadow: inset -5px -5px 6px #1b1b1b,inset 5px 5px 6px #4b4b4b;
  position:relative;
  
`;

export const Container_Res = styled.div`
  overflow-y: auto;
  background: #333333;
  padding: 10px 15px;
`;

export const Btn_Res = styled.button`
 background: #928BF9;
 position: absolute;
 left: 93%;
 top: 3px;
 padding: 2px 7px;
 border-radius: 5px;

  &:hover{
    background: #855385;
  }
`;