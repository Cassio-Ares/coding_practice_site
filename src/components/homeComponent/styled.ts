import styled from "@emotion/styled";

import AccordionMUI from "@mui/material/Accordion";
import AccordionActionsMUI from "@mui/material/AccordionActions";
import AccordionSummaryMUI from "@mui/material/AccordionSummary";
import AccordionDetailsMUI from "@mui/material/AccordionDetails";
import ExpandMoreIconMUI from "@mui/icons-material/ExpandMore";
import ButtonMUI from "@mui/material/Button";

export const Accordion = styled(AccordionMUI)`
 background: #7a7474;
 color: #ededed;
`;

export const AccordionActions = styled(AccordionActionsMUI)``;

export const AccordionSummary = styled(AccordionSummaryMUI)``;

export const AccordionDetails = styled(AccordionDetailsMUI)``;

export const ExpandMoreIcon = styled(ExpandMoreIconMUI)``;

export const Button = styled(ButtonMUI)`
  border: 2px solid #ededed;
  background:#333;

  &:hover{
    background:white;
  }
`;

export const Container_home = styled.div`
 position: relative;
 background: url('./backCode.jpg') no-repeat;
 background-size: cover;
 width: 100%;
 height: 100vh;
 overflow: auto;
`;

export const H1 = styled.h1`
  font-size: 55px;
  margin-bottom: 25px;
  backdrop-filter: blur(10px)
`;

export const H3 = styled.h3`
  font-size: 25px;
  backdrop-filter: blur(10px)
`;

export const Content_home = styled.div`
  width: 50%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 50px;
`;

export const Container_text = styled.div`
  position: absolute;
  top: 50px;
  text-align: center;
  width: 100%;
  height: 100vh;
`;
