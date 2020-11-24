import axios from "axios";

export const RequestRickAndMorty = async (URL) => {
  let res = await axios.get(URL);
  console.log(res.data);
  return res.data;
};
