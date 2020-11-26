import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  max-width: 100%;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;
