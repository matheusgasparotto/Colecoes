import { Card, CardMedia } from "@material-ui/core";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  width: 20vw;
  margin: 2%;
  :hover {
    img {
      border-radius: 0px;
    }
  }
  @media (max-width: 800px) {
    width: 70vw;
    align-self: center;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  border-radius: 50%;
`;
