import Character from "../../Components/Character";
import { StyledContainer } from "./style";
import { useParams } from "react-router-dom";

const Favorites = ({ favorites, setFavorites }) => {
  const { type } = useParams();
  console.log(favorites);

  return type === "RickAndMorty" ? (
    <StyledContainer>
      {favorites
        .filter((favorite) => favorite.id !== undefined)
        .map((favorite, index) => (
          <Character
            favorites={favorites}
            setFavorites={setFavorites}
            key={index}
            data={favorite}
          />
        ))}
    </StyledContainer>
  ) : (
    <StyledContainer>
      {favorites
        .filter((favorite) => favorite.id === "")
        .map((favorite, index) => (
          <Character
            favorites={favorite}
            setFavorites={setFavorites}
            key={index}
            data={favorite}
          />
        ))}
    </StyledContainer>
  );
};

export default Favorites;
