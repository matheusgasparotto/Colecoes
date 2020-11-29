import {
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";
import { StyledCard, StyledCardMedia } from "./style";
import { useLocation } from "react-router-dom";
import { addCharacter, removeCharacter } from "../../actions";
import { useDispatch } from "react-redux";

const Character = ({ data }) => {
  const { name, image } = data;
  const id = data.id !== undefined ? data.id : "";

  const dispatch = useDispatch();

  const handleFavorites = () => {
    const favorite = { id: id, name: name, image: image };
    dispatch(addCharacter(favorite));
  };

  const handleRemoveFavorites = () => {
    const favorite = { id: id, name: name, image: image };
    dispatch(removeCharacter(favorite));
  };

  const location = useLocation();

  return (
    <StyledCard>
      <StyledCardMedia component="img" alt={name} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        {location.pathname === "/Fav/RickAndMorty" ||
        location.pathname === "/Fav/Pokemon" ? (
          <Button size="small" color="primary" onClick={handleRemoveFavorites}>
            Remover dos Favoritos
          </Button>
        ) : (
          <Button size="small" color="primary" onClick={handleFavorites}>
            Adicionar nos Favoritos
          </Button>
        )}
      </CardActions>
    </StyledCard>
  );
};
export default Character;
