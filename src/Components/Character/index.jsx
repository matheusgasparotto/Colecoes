import {
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";
import { StyledCard, StyledCardMedia } from "./style";
import { useLocation } from "react-router-dom";

const Character = ({ data, setFavorites, favorites }) => {
  const { name, image } = data;

  const handleFavorites = (name, image) => {
    favorites
      ? setFavorites([...favorites, { name: name, image: image }])
      : setFavorites([{ name: name, image: image }]);
  };

  const handleFavoritesRemove = (name) => {
    setFavorites(favorites.filter((favorite) => favorite.name !== name));
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
        {location === "favorites" ? (
          <Button size="small" color="primary" onClick={handleFavoritesRemove}>
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
