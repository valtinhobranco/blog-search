import styled from "styled-components";

export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
`;

export const InfoData = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 20px;
  padding: 20px;
  border: 1px dashed ${(props) => props.theme.colors.green};
  border-radius: 10px;

  h1 {
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 20px 0;
  }
`;

export const ButtonGrid = styled.div`
  display: flex;
`;
