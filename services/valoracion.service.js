import axios from "axios";
import Swal from "sweetalert2";
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const getValoraciones = async (idServicio, setData, setLoader) => {
  await axios
    .get(BASE_URL + "/api/valoraciones/" + idServicio)
    .then(({ data }) => {
      setData(data);
      setLoader(false);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const postValoracion = async (comentario, idServicio, idCliente, setLoader) => {
  await axios
    .post(BASE_URL + "/api/valoracion", {
      comentario,
      idServicio,
      idCliente,
    })
    .then(({ data }) => {
      Swal.fire({
        title: data,
        icon: "success",
      });
      setLoader(true);
    })
    .catch((err) => {
      console.log(err);
    });
};
