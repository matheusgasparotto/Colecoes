/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useParams } from "react-router-dom";
import { RequestRickAndMorty } from "../../Request";
import Character from "../../Components/Character";
import { useEffect, useState } from "react";
import { Container } from "./style";
import { Pagination } from "@material-ui/lab";

const Characters = ({ setFavorites, favorites }) => {
  const { id } = useParams();
  const [RickAndPokemonCharacters, setCharactersRickAndMorty] = useState([]);

  const [page, setPage] = useState(1);
  const [numberPages, setNumberPages] = useState();

  const defineNumberpages = (data) => {
    id === "RickAndMorty" && setNumberPages(data.info?.pages);
    id === "Pokemon" && setNumberPages(Math.ceil(data.count / 20));
  };

  const handleChange = (_e, value) => {
    setPage(value);
  };

  const LoadCharacters = async () => {
    const URL =
      (id === "RickAndMorty" &&
        `https://rickandmortyapi.com/api/character/?page=${page}`) ||
      (id === "Pokemon" &&
        `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`);
    if (id === "RickAndMorty" || id === "Pokemon") {
      setCharactersRickAndMorty(await RequestRickAndMorty(URL));
    }
  };

  const location = useLocation();

  useEffect(() => {
    LoadCharacters();
  }, [location, page]);

  useEffect(() => {
    defineNumberpages(RickAndPokemonCharacters);
  }, [RickAndPokemonCharacters]);

  const { results } = RickAndPokemonCharacters;

  const urlPoke = (poke) => {
    const brokenUrl = poke.url.split("/");
    const idPoke = brokenUrl[brokenUrl.length - 2];
    return idPoke;
  };

  return (
    <>
      <Container>
        {id === "RickAndMorty" &&
          results?.map((character, index) => (
            <Character
              setFavorites={setFavorites}
              favorites={favorites}
              key={index}
              data={character}
            />
          ))}

        {id === "Pokemon" &&
          results?.map((character, index) => (
            <Character
              setFavorites={setFavorites}
              favorites={favorites}
              key={index}
              data={{
                ...character,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${urlPoke(
                  character
                )}.png`,
              }}
            />
          ))}
        <Pagination count={numberPages} page={page} onChange={handleChange} />
      </Container>
    </>
  );
};

export default Characters;
