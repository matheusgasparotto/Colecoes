import { Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Routers from "./Routers/";
//import { useForm } from "react-hook-form";
//import * as yup from "yup"
//import { yupResolver } from "@hookform/resolvers/yup"
//import {} from "@material-ui/core"

const App = () => {
  //const { register, unregister, handleSubmit, setValue, errors } = useForm()

  //const schema = yup.object().shape({})

  return (
    <div className="App">
      <Routers />
    </div>
  );
};

export default App;
