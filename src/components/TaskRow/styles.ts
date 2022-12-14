import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    background: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
    margin-bottom: 8px;
    flex-direction: row;
    justify-content: space-between;
    padding:12px;
    border-radius: 8px;
`;

export const TaskDescription = styled(TouchableOpacity)`
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 12px 
`;