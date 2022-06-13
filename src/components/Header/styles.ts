import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 112px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  padding: 20px 0;
  background: ${(props) => props.theme.colors.headerBg};
`;

export const HeaderContent = styled.div`
  width: calc(min(1200px, 100%) - 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1``;
