import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  border-top-width: 1px;
  border-top-style : solid;
  border-top-color : ${({ theme }) => theme.COLORS.GRAY_400};
  align-items: center;
`;

export const EmptyImage = styled.Image`
  margin-top: 46px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};

`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`