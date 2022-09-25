import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 175px;

  background: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Logo = styled.Image`
  width: 111px;
  height: 32px;
`;