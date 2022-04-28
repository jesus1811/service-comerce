import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const getServicioServices = async (setData, setLoder) => {
  await axios
    .get(BASE_URL + "/api/servicio")
    .then(({ data }) => {
      setData(data);
      setLoder(false);
    })
    .catch((e) => {
      alert(JSON.stringify(e));
    });
};
