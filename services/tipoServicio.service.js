import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const getTipoServices = async (setState, setLoader) => {
  await axios
    .get(BASE_URL + "/api/tipoServicio")
    .then(({ data }) => {
      setState(data);
      setLoader(false);
    })
    .catch((err) => {
      console.log(err);
    });
};
