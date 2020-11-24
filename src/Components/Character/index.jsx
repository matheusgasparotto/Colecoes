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

  const handleFavorites = () => {
    favorites.find((favorite) => favorite.name === name) === undefined &&
      setFavorites([...favorites, { name: name, image: image }]);
  };
  console.log(favorites);

  const handleRemoveFavorites = () => {
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
        {location.pathname === "/Fav" ? (
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
