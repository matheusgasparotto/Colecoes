import PokeImg from "../../img/pokemonfolder.png";
import RickAndMortyImg from "../../img/rickandmortyfolder.png";
import { ContainerFolder, StyledImg } from "./styles";

export const Folders = ({ Click }) => {
  return (
    <ContainerFolder>
      <StyledImg
        src={PokeImg}
        alt="Pokemon Folder"
        onClick={() => Click("Pokemon")}
      />
      <StyledImg
        src={RickAndMortyImg}
        alt="Pokemon Folder"
        onClick={() => Click("RickAndMorty")}
      />
    </ContainerFolder>
  );
};
