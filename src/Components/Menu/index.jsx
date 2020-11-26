import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { StyledToolbar } from "./style";
import { MdStarBorder } from "react-icons/md";
import { RickIcon, PokeIcon } from "../Icons";
import { useHistory } from "react-router-dom";

const Menu = () => {
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
            <p>Rick And Morty</p>
          </IconButton>
          <IconButton
            name="Pokemon"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => handlePage("Fav/RickAndMorty")}
          >
            <MdStarBorder />
            <p>Favoritos</p>
          </IconButton>
          <IconButton
            name="Pokemon"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => handlePage("Pokemon")}
          >
            <PokeIcon />
            <p>Pokemons</p>
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Menu;
