import axios from "axios";
import Swal from "sweetalert2";
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const getComprobanteServices = async (idProfesional, setData, setLoader) => {
  await axios
    .get(BASE_URL + "/api/comprobantes/" + idProfesional)
    .then(({ data }) => {
      setData(data);
    })
    .catch((err) => {
      Swal.fire({
        title: "error de conexion con el servidor",
        icon: "error",
      });
    })
    .finally(() => {
      setLoader(false);
    });
};
