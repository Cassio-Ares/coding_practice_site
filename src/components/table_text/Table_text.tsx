'use client'

import { ReactNode, SyntheticEvent, useState } from 'react';
import { StyledBox, StyledTab, StyledTabs, TabPanelContent } from './styles';

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

interface Table {
  question: string,
  responseJS: string,
  responseTS: string,
  methods: string
}

export const Table_text = ({ question, responseJS, responseTS, methods }: Table) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledBox sx={{ width: '100%' }} >
      <StyledBox style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', position: 'relative' }} sx={{ borderBottom: 0, borderColor: 'divider', borderTop: 0}}>
        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <StyledTab label="Desafio" {...a11yProps(0)} />
          <StyledTab label="Respostas em JS" {...a11yProps(1)} />
          <StyledTab label="Metodos para ajudar" {...a11yProps(2)} />
        </StyledTabs>
      </StyledBox>
      <CustomTabPanel value={value} index={0}>
        {question}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {responseJS}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {responseTS}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {methods}
      </CustomTabPanel>
    </StyledBox>
  );
}
