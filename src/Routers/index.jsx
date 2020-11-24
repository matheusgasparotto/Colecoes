import { Route, Switch, useHistory } from "react-router-dom";
import Characters from "../Pages/Characters";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { StyledToolbar } from "./style";
import { MdStarBorder } from "react-icons/md";
import { RickIcon, PokeIcon } from "../Components/Icons";
import { useState } from "react";
import Favorites from "../Pages/Favorites";

const Routers = () => {
  const history = useHistory();

  const handlePage = (route) => {
    history.push(`/${route}`);
  };

  const [favorites, setFavorites] = useState([]);

  return (
    <>
      <AppBar position="static">
        <StyledToolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => handlePage("RickAndMorty")}
          >
            <RickIcon />
            Rick And Morty
          </IconButton>
          <IconButton
            name="Pokemon"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => handlePage("Fav")}
          >
            <MdStarBorder />
            Favoritos
          </IconButton>
          <IconButton
            name="Pokemon"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => handlePage("Pokemon")}
          >
            <PokeIcon />
            Pokemons
          </IconButton>
        </StyledToolbar>
      </AppBar>
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/Fav">
          <Favorites setFavorites={setFavorites} favorites={favorites} />
        </Route>
        <Route exact path="/:id">
          <Characters setFavorites={setFavorites} favorites={favorites} />
        </Route>
      </Switch>
    </>
  );
};
export default Routers;
