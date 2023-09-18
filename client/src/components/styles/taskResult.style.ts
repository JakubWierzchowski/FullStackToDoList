import styled, { css } from "styled-components";
import { TaskTitleProps } from "../types/taskResult.type";

export const TaskListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 60%;
`;

export const TaskTitle = styled.div<TaskTitleProps>`
  justify-content: flex-start;
  padding: 5px;

  ${(props) =>
    props.$completed &&
    css`
      background-color: ${({ theme }) => theme.hoverColor};
      border-radius: 10px 10px 10px 10px;
      text-decoration: line-through;
    `}
`;

export const TaskContainer = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DeleteCheckboxContainer = styled.div`
  width: 30%
  display: flex;
  justify-content: center;
  align-items:center;
`;

export const Input = styled.input`
position:relative;
top:6px;
  margin:0 25px 0 0 ;
    width: 14px;
    height: 14px;
  ${({ theme }) => theme.tablet} {
    padding: 8px 12px;
    width: 20px;
    height: 20px;
  }

  ${({ theme }) => theme.desktop} {
    width: 24px;
    height: 24px;
  }

  ${({ theme }) => theme.bigDesktop} {
    width 28px;
    height: 28px;
  }
`;
