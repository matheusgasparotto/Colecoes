import {
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";
import { StyledCard, StyledCardMedia } from "./style";
import { useLocation } from "react-router-dom";

const Character = ({ data }) => {
  const { name, image } = data;
  const id = data.id !== undefined ? data.id : "";

  const getFavorites = () => {
    console.log(window.localStorage.getItem("favorites") !== null);
    const favorites =
      window.localStorage.getItem("favorites") !== null
        ? JSON.parse(window.localStorage.getItem("favorites"))
        : [];
    return favorites;
  };

  const handleFavorites = () => {
    console.log(window.localStorage);
    if (
      getFavorites().find((favorite) => favorite.name === name) === undefined
    ) {
      const favorites = [
        ...getFavorites(),
        { id: id, name: name, image: image },
      ];
      window.localStorage.removeItem("favorites");
      console.log(getFavorites());
      window.localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };
  console.log(JSON.stringify(...getFavorites()));

  const handleRemoveFavorites = () => {
    window.localStorage.removeItem("favorites");
    window.localStorage.setItem(
      "favorites",
      JSON.stringify(
        getFavorites().filter((favorite) => favorite.name !== name)
      )
    );
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
