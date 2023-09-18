import styled from "styled-components";
export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.label`
  margin: 10px;
  font-size: ${({ theme }) => theme.fontSizeformFieldItemsMobile};
  color: ${({ theme }) => theme.dark};
  ${({ theme }) => theme.tablet} {
    font-size: ${({ theme }) => theme.fontSizeformFieldItemsTablet};
  }
  ${({ theme }) => theme.desktop} {
    font-size: ${({ theme }) => theme.fontSizeformFieldItemsDesktop};
  }
  ${({ theme }) => theme.bigDesktop} {
    font-size: ${({ theme }) => theme.fontSizeformFieldItemsBigDesktop};
  }
`;

export const Input = styled.input`
  width: 200px;
  padding: 10px 12px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.dark};
  margin: 10px;
  &:focus {
    outline: none;
  }
  ${({ theme }) => theme.tablet} {
    font-size: ${({ theme }) => theme.fontSizformFieldItemsTablet};
    width: 300px;
  }
  ${({ theme }) => theme.desktop} {
    font-size: ${({ theme }) => theme.fontSizformFieldItemsDesktop};
    width: 400px;
  }
  ${({ theme }) => theme.bigDesktop} {
    font-size: ${({ theme }) => theme.fontSizformFieldItemsBigDesktop};
    width: 500px;
  }
`;
