import styled from "styled-components";

export const ContainerFolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90vw;
  margin: 5vh;
  height: 70vh;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 80vw;
    height: 100%;
  }
`;

export const StyledImg = styled.img`
  width: 40%;
  height: 100%;
  filter: brightness(0.7);
  cursor: pointer;
  :hover {
    filter: brightness(1);
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    filter: brightness(1);
  }
`;
