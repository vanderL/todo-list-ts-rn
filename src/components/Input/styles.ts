import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';


export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE}; 
  `};
  
  border-radius: 6px;
  padding: 16px;
`;