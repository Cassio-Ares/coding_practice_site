import styled from '@emotion/styled';

import BoxMUI from '@mui/material/Box';
import InputLabelMUI from '@mui/material/InputLabel';
import MenuItemMUI from '@mui/material/MenuItem';
import FormControlMUI from '@mui/material/FormControl';
import SelectMUI from '@mui/material/Select';


export const Box = styled(BoxMUI)`
 height: 52px;

 &::after {
    content: '';
    width: 690px;
    position: absolute;
    bottom: -2px; 
    left: -10px; 
    right: -10px; 
    border-bottom: 2px solid #fff;
}
 `;

export const InputLabel = styled(InputLabelMUI)`
 margin-top: 20px;
 color: #fff; 
 font-size: 25px;
`;

export const MenuItem = styled(MenuItemMUI)``;

export const FormControl = styled(FormControlMUI)``;

export const Select = styled(SelectMUI)`
color: #fff;
margin-left: 230px;
margin-top: -4px;
&.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
    }
`;

