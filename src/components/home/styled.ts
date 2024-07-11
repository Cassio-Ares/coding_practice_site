import styled from "@emotion/styled";

import AccordionMUI from "@mui/material/Accordion";
import AccordionActionsMUI from "@mui/material/AccordionActions";
import AccordionSummaryMUI from "@mui/material/AccordionSummary";
import AccordionDetailsMUI from "@mui/material/AccordionDetails";
import ExpandMoreIconMUI from "@mui/icons-material/ExpandMore";
import ButtonMUI from "@mui/material/Button";

export const Accordion = styled(AccordionMUI)``;

export const AccordionActions = styled(AccordionActionsMUI)``;

export const AccordionSummary = styled(AccordionSummaryMUI)``;

export const AccordionDetails = styled(AccordionDetailsMUI)``;

export const ExpandMoreIcon = styled(ExpandMoreIconMUI)``;

export const Button = styled(ButtonMUI)``;

export const Container_home = styled.div`
 position: relative;
 background: rgb(51,51,51);
 background: linear-gradient(194deg, rgba(51,51,51,1) 28%, rgba(150,64,159,1) 55%, rgba(79,73,79,1) 71%);
 width: 100%;
 height: 100vh;
 overflow: auto;
`;

export const H1 = styled.h1`
  font-size: 55px;
  margin-bottom: 25px;
`;

export const H3 = styled.h3`
  font-size: 25px;
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
