import Character from "../../Components/Character";
import { StyledContainer } from "./style";
import { useParams } from "react-router-dom";
import FavMenu from "../../Components/FavMenu";
import { useState } from "react";
import Graph from "../../Components/Graph";

const Favorites = () => {
  const { type } = useParams();

  const [favorites, setFavorites] = useState(
    JSON.parse(window.localStorage.getItem("favorites"))
  );

  const RickAndMorty_List = favorites.filter((favorite) => favorite.id !== "");
  const Pokemon_List = favorites.filter((favorite) => favorite.id === "");

  const GraphData = {
    datasets: [
      {
        backgroundColor: ["blue", "red"],
        borderColor: ["blue", "red"],
        circumference: 1,
        data: [RickAndMorty_List.length, Pokemon_List.length],
      },
    ],
    labels: ["Rick And Morty", "Pokemon"],
  };

  console.log(GraphData);

  return (
    <>
      <FavMenu />
      <div>
        {type === "RickAndMorty" && (
          <StyledContainer>
            {favorites !== null &&
              RickAndMorty_List.map((favorite, index) => (
                <Character
                  setFavorites={setFavorites}
                  key={index}
                  data={favorite}
                />
              ))}
          </StyledContainer>
        )}

        {type === "Pokemon" && (
          <StyledContainer>
            {favorites !== null &&
              Pokemon_List.map((favorite, index) => (
                <Character
                  setFavorites={setFavorites}
                  key={index}
                  data={favorite}
                />
              ))}
          </StyledContainer>
        )}
        {type === "Graph" && <Graph data={GraphData} />}
      </div>
    </>
  );
};

export default Favorites;
