import styled from '@emotion/styled'

import BoxMUI from '@mui/material/Box';
import TabsMUI from '@mui/material/Tabs';
import TabMUI from '@mui/material/Tab';

export const StyledBox = styled(BoxMUI)`
  border: 3px solid #fff;
  height: 100%;
`;

export const StyledTabs = styled(TabsMUI)`
  color: #fff;
`;

export const StyledTab = styled(TabMUI)`
  color: #fff;
`;

export const TabPanelContent = styled.div`
  padding: 16px;
  height: 100vh; 
  overflow-y: auto;
  scrollbar-width: thin; 
  scrollbar-color: #888 #fff; 
`;
