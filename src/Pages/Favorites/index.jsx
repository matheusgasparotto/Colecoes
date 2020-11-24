import Character from "../../Components/Character";
import { StyledContainer } from "./style";

const Favorites = ({ favorites, setFavorites }) => {
  return (
    <StyledContainer>
      {favorites.map((favorite, index) => (
        <Character
          favorites={favorites}
          setFavorites={setFavorites}
          key={index}
          data={favorite}
        />
      ))}
    </StyledContainer>
  );
};

export default Favorites;
