import axios from "axios";

export const RequestRickAndMorty = async (URL) => {
  let res = await axios.get(URL);
  return res.data.results;
};
