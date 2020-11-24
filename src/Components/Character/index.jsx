import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";
import { StyledCard } from "./style";

const Character = ({ data }) => {
  const { name, image } = data;
  return (
    <StyledCard>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={image}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Adicionar aos Favoritos
        </Button>
      </CardActions>
    </StyledCard>
  );
};
export default Character;
