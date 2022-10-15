import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 6px;
  padding: 0 24px;

  margin-top: 32px;
`;

export const TextCreate = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.BLUE}; 
    font-weight: ${theme.FONT_FAMILY.BOLD};
  `};
  line-height: 17px;
`;

export const ViewContent = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextDone = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.PURPLE}; 
    font-weight: ${theme.FONT_FAMILY.BOLD};
  `};
  line-height: 17px;
`;

export const Count = styled.Text`
 margin-left: 8px;
 border-radius: 8px;
 border-radius: 999px;
 justify-content: center;
 align-items: center;
 padding: 2px 8px;

 ${({ theme }) => css`
  background-color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE}; 
    font-weight: ${theme.FONT_FAMILY.BOLD};
  `};
`;