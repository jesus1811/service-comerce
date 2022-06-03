import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const getPaisesServices = async (setData) => {
  await axios
    .get(BASE_URL + "/api/paises")
    .then(({ data }) => {
      setData(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
