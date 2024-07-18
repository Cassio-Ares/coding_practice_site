'use client'

import { ReactNode, SyntheticEvent, useEffect, useState } from 'react';
import { StyledBox, StyledTab, StyledTabs, TabPanelContent } from './styles';

import { Method, Question, QUESTIONS } from '../questions';
import { Methods } from './components_table/methods/Methods';
import { Answers } from './components_table/answers/Answers';
import { QuestionText } from './components_table/question/QuestionText';



interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}


function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <TabPanelContent>{children}</TabPanelContent>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export const Table_text = ({ params }) => {
  const [value, setValue] = useState(0);
  const [titleData, setTitleData] = useState<string>()
  const [questionData, setQuestionData] = useState<string>()
  const [solutionsData, setSolutionData] = useState<string[]>()
  const [methodsData, setmethodsData] = useState<Method[]>()

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    searchingForData(params)
  }, [params])


  const searchingForData = (params: any) => {
    let { id, title, question, javascript, solutions, methods } = QUESTIONS[params]
    setTitleData(title)
    setQuestionData(question)
    setSolutionData(solutions)
    setmethodsData(methods)

  }

  return (
    <StyledBox sx={{ width: '100%' }} >
      <StyledBox style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', position: 'relative' }} sx={{ borderBottom: 0, borderColor: 'divider', borderTop: 0 }}>
        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <StyledTab label="Desafio" {...a11yProps(0)} />
          <StyledTab label="Respostas em JS" {...a11yProps(1)} />
          <StyledTab label="Metodos para ajudar" {...a11yProps(2)} />
        </StyledTabs>
      </StyledBox>
       <CustomTabPanel value={value} index={0}>
        {titleData && <QuestionText title={titleData} questions={questionData} />}
      </CustomTabPanel> 
      <CustomTabPanel value={value} index={1}>
      {solutionsData &&  <Answers data={solutionsData} />}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       {methodsData &&  <Methods data={methodsData} />}
      </CustomTabPanel>
    </StyledBox>
  );
}
