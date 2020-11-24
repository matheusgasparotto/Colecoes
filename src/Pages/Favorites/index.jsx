import { Paper } from "@material-ui/core";
import Character from "../../Components/Character";

const Favorites = ({ favorites }) => {
  console.log("oi");
  return (
    <div>
      {favorites.map((favorite, index) => (
        <Character key={index} data={favorite} />
      ))}
    </div>
  );
};

export default Favorites;
