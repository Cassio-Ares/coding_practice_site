import styled from '@emotion/styled'

import BoxMUI from '@mui/material/Box';
import TabsMUI from '@mui/material/Tabs';
import TabMUI from '@mui/material/Tab';

export const StyledBox = styled(BoxMUI)`
  border-bottom: 2px solid #888;
  border-top: 1px solid #888;
  background: #333333;

  &::before{
    content: "";
    border-left: 2px solid #888;
    position: absolute;
    height: 50px;
    left:0;
  }
`;

export const StyledTabs = styled(TabsMUI)`
  color: #fff;
`;

export const StyledTab = styled(TabMUI)`
  color: #fff;
`;

export const TabPanelContent = styled.div`
  height: 90vh; 
  overflow-y: auto;
  scrollbar-width: thin; 
  scrollbar-color: #888 #fff; 
  border-left: 2px solid #888;
`;
