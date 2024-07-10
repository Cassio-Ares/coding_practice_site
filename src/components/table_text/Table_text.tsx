'use client'

import * as S from './styles'

import { ReactNode, SyntheticEvent, useState } from 'react';

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
      {value === index && <S.Box sx={{ p: 3 }}>{children}</S.Box>}
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
    <S.Box sx={{ width: '50%' }}>
      <S.Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <S.Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <S.Tab label="Desafio" {...a11yProps(0)} />
          <S.Tab label="Respostas em JS" {...a11yProps(1)} />
          <S.Tab label="Respostas em TS" {...a11yProps(2)} />
          <S.Tab label=" Metodos para ajudar" {...a11yProps(3)} />
        </S.Tabs>
      </S.Box>
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
    </S.Box>
  );
}
