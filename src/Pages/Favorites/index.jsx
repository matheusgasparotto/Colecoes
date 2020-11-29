import Character from "../../Components/Character";
import { StyledContainer } from "./style";
import { useParams } from "react-router-dom";
import FavMenu from "../../Components/FavMenu";
import Graph from "../../Components/Graph";
import { useSelector } from "react-redux";

const Favorites = () => {
  const { type } = useParams();

  const favorites = useSelector((state) => state.characters);

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
                <Character key={index} data={favorite} />
              ))}
          </StyledContainer>
        )}

        {type === "Pokemon" && (
          <StyledContainer>
            {favorites !== null &&
              Pokemon_List.map((favorite, index) => (
                <Character key={index} data={favorite} />
              ))}
          </StyledContainer>
        )}
        {type === "Graph" && <Graph data={GraphData} />}
      </div>
    </>
  );
};

export default Favorites;
