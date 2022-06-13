import { ButtonGrid } from "./../../pages/Home/styles";
import styled, { css } from "styled-components";
import colors from "../../styles/colors";

interface ButtonProps {
  outlineButton?: boolean;
  headerButton?: boolean;
  margin?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const Container = styled.button<ButtonProps>`
  height: 50px;
  width: 200px;
  background: ${colors.purple};
  border: 1px solid ${colors.purple};
  color: ${colors.white};
  margin: ${(props) => props.margin ?? "10px 5px"};
  padding: ${(props) => props.padding ?? ""};
  font-size: ${(props) => props.fontSize ?? "16px"};
  font-weight: ${(props) => props.fontWeight ?? "400"};
  border-radius: 10px;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    background: none;
    border: 1px solid ${colors.purple};
    color: ${colors.white};
    color: ${colors.purple};
  }

  &:disabled {
    opacity: 0.5;
    background: unset;
    color: ${colors.white};
    cursor: unset;
  }

  ${(props) =>
    props.outlineButton &&
    css`
      background: none;
      border: 1px solid ${colors.purple};
      color: ${colors.purple};

      &:hover {
        background: ${colors.purple};
        border: 1px solid ${colors.purple};
        color: ${colors.purple};
        color: ${colors.white};
      }

      &:disabled {
        color: ${colors.purple};
      }
    `}

  ${(props) =>
    props.headerButton &&
    css`
      background: ${(props) => props.theme.colors.headerButton};
      color: ${(props) => props.theme.colors.headerButtonText};

      &:hover {
        background: ${props.theme.colors.tertiary};
        border: 1px solid ${colors.purple};
      }
    `}
`;

export const IconArea = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(225, 225, 225, 0.3);
  padding: 0 15px;
`;

export const Icon = styled.img`
  height: 20px;
`;

export const Label = styled.span`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
