import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
  padding: 0 24px;

  margin-top: -22px;
`;