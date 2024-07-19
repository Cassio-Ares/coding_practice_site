import styled from "@emotion/styled";

import AlertMUI from '@mui/material/Alert';
import ButtonMUI from '@mui/material/Button';
import StackMUI from '@mui/material/Stack';

export const Stack = styled(StackMUI)`
 position: relative;
 width: 550px;
 padding: 0  50px ;
  overflow: hidden; 
`;

export const Alert = styled(AlertMUI)`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: #43a047;
 color: #efefef;
`;

export const Container_btn_alert = styled.div`
 display:flex;
 flex-direction: row;
`;


export const ButtonAlert = styled(ButtonMUI)`

width: 180px;
border: 1px solid #efefef;
margin-left: -10px;
margin-right: 10px;

  &:hover{
   background:#1b5e20;
  }
`;

export const ButtonNext = styled(ButtonMUI)`
width: 180px;
border: 1px solid #efefef;
margin-right: 32px;
&:hover{
   background:#1b5e20;
  }
`;




