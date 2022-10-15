import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 6px;
  padding: 0 24px;

  margin-top: 32px;
`;

export const TextCreate = styled.TextInput`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.BLUE}; 
    font-weight: ${theme.FONT_FAMILY.BOLD};
  `};
  line-height: 17px;
`;

export const TextDone = styled.TextInput`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.PURPLE}; 
    font-weight: ${theme.FONT_FAMILY.BOLD};
  `};
  line-height: 17px;
`;

export const Count = styled.TextInput`
 ${({ theme }) => css`
  background-color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE}; 
    font-weight: ${theme.FONT_FAMILY.BOLD};
  `};
  line-height: 17px;
`;