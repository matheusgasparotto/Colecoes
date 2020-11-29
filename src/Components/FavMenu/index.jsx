import IconButton from "@material-ui/core/IconButton";
import { RickIcon, PokeIcon } from "../../Components/Icons";
import { useHistory } from "react-router-dom";
import { MenuContainer } from "./style";
import { BsGraphUp } from "react-icons/bs";

const FavMenu = () => {
  const history = useHistory();

  const handlePage = (type) => {
    history.push(`${type}`);
  };
  return (
    <MenuContainer>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => handlePage("RickAndMorty")}
      >
        <RickIcon />
      </IconButton>
      <IconButton
        name="Graph"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => handlePage("Graph")}
      >
        <BsGraphUp />
      </IconButton>
      <IconButton
        name="Pokemon"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => handlePage("Pokemon")}
      >
        <PokeIcon />
      </IconButton>
    </MenuContainer>
  );
};

export default FavMenu;
