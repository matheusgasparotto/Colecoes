import { Route, Switch, useHistory } from "react-router-dom";
import Characters from "../Pages/Characters";
import Menu from "../Components/Menu";
import Favorites from "../Pages/Favorites";
import { Folders } from "../Components/Folders/";

const Routers = () => {
  const history = useHistory();

  const handlePage = (route) => {
    history.push(`/${route}`);
  };
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Folders Click={handlePage} />
        </Route>
        <Route exact path="/Fav/:type">
          <Favorites />
        </Route>
        <Route exact path="/:id">
          <Characters />
        </Route>
      </Switch>
    </>
  );
};
export default Routers;
