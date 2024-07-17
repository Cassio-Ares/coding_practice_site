'use client'
import { Box, FormControl, InputLabel, MenuItem, Select } from "./style";
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
    <Box>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Linguagem</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={langType} 
          label="Linguagem"
          onChange={handleChange}
        >
          
          {languageArray.map((language, index) => (
            <MenuItem key={index} value={language[0]}>
              {language[0]} <span style={{ marginLeft: '5px', color: '#ada9a9' }}>{language[1]}</span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
