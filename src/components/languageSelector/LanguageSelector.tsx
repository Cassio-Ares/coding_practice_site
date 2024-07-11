'use client'
import * as S from "./style"
import { useState } from "react";
import { SelectChangeEvent } from '@mui/material/Select';

//import das linguagens
import { Languages } from '../language';

const languageArray: Array<[string, string]> = Object.entries(Languages) // transforma o obj em um array

interface LanguageSelectorProps{
  languageType:string;
  onSelect: (language:string) => void;
}


export const LanguageSelector = ({languageType, onSelect}:LanguageSelectorProps) => {
  const [langType, setLangType] = useState(languageType);

 
  const handleChange = (event: SelectChangeEvent) => {
    const selectedLanguage = event.target.value as string;
    setLangType(selectedLanguage);
    onSelect(selectedLanguage);
  };

  return (
    <S.Box>
      <S.FormControl>
        <S.InputLabel id="demo-simple-select-label">Linguagem</S.InputLabel>
        <S.Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={langType} 
          label="Linguagem"
          onChange={handleChange}
        >
          {languageArray.map((language, index) => (
            <S.MenuItem key={index} value={language[0]}>
              {language[0]} <span style={{ marginLeft: '5px', color: '#ada9a9' }}>{language[1]}</span>
            </S.MenuItem>
          ))}
        </S.Select>
      </S.FormControl>
    </S.Box>
  );
}
