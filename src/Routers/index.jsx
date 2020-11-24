import { Route, Switch, Link, useHistory, useLocation } from "react-router-dom";
import Characters from "../Pages/Characters";

const Routers = () => {
  return (
    //Menu
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/:id">
        <Characters />
      </Route>
      <Route exact path="/favorites"></Route>
    </Switch>
  );
};
export default Routers;
