import styled from '@emotion/styled';

import BoxMUI from '@mui/material/Box';
import InputLabelMUI from '@mui/material/InputLabel';
import MenuItemMUI from '@mui/material/MenuItem';
import FormControlMUI from '@mui/material/FormControl';
import SelectMUI from '@mui/material/Select';


export const Box = styled(BoxMUI)`
 width: 400px;
 height: 35px;
 `;

export const InputLabel = styled(InputLabelMUI)`
 margin-top: 10px;
 color: #fff; 
`;

export const MenuItem = styled(MenuItemMUI)``;

export const FormControl = styled(FormControlMUI)``;

export const Select = styled(SelectMUI)`
color: #fff;
margin-left: 75px;
margin-top: -20px;
&.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
    }
`;

