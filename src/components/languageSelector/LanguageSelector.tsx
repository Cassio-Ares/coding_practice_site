'use client'
import * as S from "./style"
import { useState } from "react";
import { SelectChangeEvent } from '@mui/material/Select';

//import das linguagens
import { Languages } from '../language.js';

const languageArray: Array<[string, string]> = Object.entries(Languages) // transforma o obj em um array


export const LanguageSelector = ({languageType, onSelect}) => {
  const [langType, setLangType] = useState(languageType);

 
  const handleChange = (event: SelectChangeEvent) => {
    setLangType(event.target.value as string);
  };
console.log('oii', languageType)
  return (
    <S.Box>
      <S.FormControl fullWidth>
        <S.InputLabel id="demo-simple-select-label">Linguagem</S.InputLabel>
        <S.Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={languageType}
          label="Linguagem"
          onChange={handleChange}
          onClick={()=> onSelect(langType)}
        >

          {
            languageArray.map((language, index) => (
              <S.MenuItem key={index} value={language}>
                {language[0]} <span style={{marginLeft: '5px', color:'#ada9a9' }}>    {language[1]}</span>
              </S.MenuItem>
            ))
          }
        </S.Select>
      </S.FormControl>
    </S.Box>
  );
}
