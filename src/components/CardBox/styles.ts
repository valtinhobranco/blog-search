import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border-radius: 50px;

  background: ${colors.yellow};
`;
