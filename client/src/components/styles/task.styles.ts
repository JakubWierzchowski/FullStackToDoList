import styled from "styled-components";

export const MainWrapper = styled.main`
  text-align: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  margin-top: 10px;
  padding: 0;
`;
export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.dark};
  font-size: ${({ theme }) => theme.fontSizTitleMobile};

  ${({ theme }) => theme.tablet} {
    font-size: ${({ theme }) => theme.fontSizTitleTablet};
  }
  ${({ theme }) => theme.desktop} {
    font-size: ${({ theme }) => theme.fontSizTitleDesktop};
  }
  ${({ theme }) => theme.bigDesktop} {
    font-size: ${({ theme }) => theme.fontSizTitleBigDesktop};
  }
`;
