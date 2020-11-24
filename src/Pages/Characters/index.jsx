import { useParams } from "react-router-dom";
import { RequestRickAndMorty } from "../../Request";
import Character from "../../Components/Character";
import { useEffect, useState } from "react";
import { Container } from "./style";
import { Pagination } from "@material-ui/lab";

const Characters = () => {
  const { id } = useParams();
  const [RickAndPokemonCharacters, setCharactersRickAndMorty] = useState([]);

  const [page, setPage] = useState(1);
  const [numberPages, setNumberPages] = useState();

  const handleChange = (_event, value) => {
    setPage(value);
  };

  const LoadCharacters = async () => {
    const URL =
      id === "RickAndMorty"
        ? `https://rickandmortyapi.com/api/character/?page=${page}`
        : `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`;
    setCharactersRickAndMorty(await RequestRickAndMorty(URL));
    console.log(RickAndPokemonCharacters);
  };

  useEffect(() => {
    LoadCharacters();
  }, []);

  const { results } = RickAndPokemonCharacters;
  //   const { pages } = RickAndPokemonCharacters?.info;

  return (
    <>
      <Container>
        {id === "RickAndMorty" &&
          results?.map((character, index) => (
            <Character key={index} data={character} />
          ))}
      </Container>
      <Container>
        {id === "Pokemon" &&
          results?.map((character, index) => (
            <Character key={index} data={character} />
          ))}
      </Container>
      <Pagination count={10} page={page} onChange={handleChange} />
    </>
  );
};

export default Characters;
