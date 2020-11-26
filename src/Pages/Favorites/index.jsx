import Character from "../../Components/Character";
import { StyledContainer } from "./style";
import { useParams } from "react-router-dom";
import FavMenu from "../../Components/FavMenu";
import { useEffect, useState } from "react";

const Favorites = () => {
  const { type } = useParams();

  const [favorites, setFavorites] = useState(
    JSON.parse(window.localStorage.getItem("favorites"))
  );

  // const getFavorites = () => {
  //   const favorites =
  //     window.localStorage.getItem("favorites") !== null
  //       ? JSON.parse(window.localStorage.getItem("favorites"))
  //       : [];
  //   return favorites;
  // };

  // useEffect(() => {
  //   console.log("executei");
  //   setFavorites(JSON.parse(window.localStorage.getItem("favorites")));
  // }, [window.localStorage]);
  console.log(favorites);
  return (
    <>
      <FavMenu />
      <div>
        {type === "RickAndMorty" ? (
          <StyledContainer>
            {favorites
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
            {favorites
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
