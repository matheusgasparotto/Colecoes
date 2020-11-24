import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Characters from "../Pages/Characters";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { StyledToolbar } from "./style";
import { MdStarBorder } from "react-icons/md";
import { RickIcon, PokeIcon } from "../Components/Icons";

const Routers = () => {
  const history = useHistory();

  const handlePage = (route) => {
    history.push(`/${route}`);
  };
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
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => handlePage("favorites")}
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
        <Route exact path="/:id">
          <Characters />
        </Route>
        <Route exact path="/favorites"></Route>
      </Switch>
    </>
  );
};
export default Routers;
