import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;
