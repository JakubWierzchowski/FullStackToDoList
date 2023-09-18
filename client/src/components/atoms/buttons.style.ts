import styled, { css } from "styled-components";
import { ButtonProps } from "../types/button.type";

export const Button = styled.button<ButtonProps>`
  color: white;
  border: 0;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  background-color: ${({ disabled }) => (disabled ? "#b5121255" : "#059316")};
  font-size: ${({ theme }) => theme.fontSizeButtonMobile};
  font-family: "Montserrat", sans-serif;

  ${({ theme }) => theme.tablet} {
    padding: 8px 12px;
    font-size: ${({ theme }) => theme.fontSizeButtonMobileTablet};
  }

  ${({ theme }) => theme.desktop} {
    font-size: ${({ theme }) => theme.fontSizeButtonMobileDesktop};
  }

  ${({ theme }) => theme.bigDesktop} {
    font-size: ${({ theme }) => theme.fontSizeButtonMobileBigDesktop};
  }

  ${(props) =>
    props.$delete &&
    css`
      padding: 4px 8px;
      background-color: #e42727;
    `}
`;
