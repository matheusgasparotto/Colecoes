import Character from "../../Components/Character";
import { StyledContainer } from "./style";
import { useParams } from "react-router-dom";
import FavMenu from "../../Components/FavMenu";
import { useState } from "react";

const Favorites = () => {
  const { type } = useParams();

  const [favorites, setFavorites] = useState(
    JSON.parse(window.localStorage.getItem("favorites"))
  );

  return (
    <>
      <FavMenu />
      <div>
        {type === "RickAndMorty" ? (
          <StyledContainer>
            {favorites !== null &&
              favorites
                .filter((favorite) => favorite.id !== "")
                .map((favorite, index) => (
                  <Character
                    setFavorites={setFavorites}
                    key={index}
                    data={favorite}
                  />
                ))}
          </StyledContainer>
        ) : (
          <StyledContainer>
            {favorites !== null &&
              favorites
                .filter((favorite) => favorite.id === "")
                .map((favorite, index) => (
                  <Character
                    setFavorites={setFavorites}
                    key={index}
                    data={favorite}
                  />
                ))}
          </StyledContainer>
        )}
      </div>
    </>
  );
};

export default Favorites;
