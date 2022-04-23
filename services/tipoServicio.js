import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const getTipoServices = async (setState, setLoader) => {
  await axios
    .get(BASE_URL + "/api/tipoServicio")
    .then((res) => {
      setState(res.data);
      setLoader(false);
    })
    .catch((e) => {
      alert(JSON.stringify(e));
    });
};
