import { useParams } from "react-router-dom";
import { RequestRickAndMorty } from "../../Request";
import Character from "../../Components/Character";
import { useEffect, useState } from "react";
import { Container } from "./style";

const Characters = () => {
  const { id } = useParams();
  const [RickAndPokemonCharacters, setCharactersRickAndMorty] = useState([]);

  const LoadCharacters = async () => {
    const page = 1;
    const URL =
      id === "RickAndMorty"
        ? `https://rickandmortyapi.com/api/character/?page=${page}`
        : `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`;
    setCharactersRickAndMorty(await RequestRickAndMorty(URL));
  };

  useEffect(() => {
    LoadCharacters();
  }, []);

  return (
    <>
      <Container>
        {id === "RickAndMorty" &&
          RickAndPokemonCharacters.map((character, index) => (
            <Character key={index} data={character} />
          ))}
      </Container>
      <Container>
        {id === "Pokemon" &&
          RickAndPokemonCharacters.map((character, index) => (
            <Character key={index} data={character} />
          ))}
      </Container>
    </>
  );
};

export default Characters;
