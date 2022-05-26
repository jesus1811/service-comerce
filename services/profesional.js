import axios from "axios";
import Swal from "sweetalert2";
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const getProfesionalServices = async (idProfesional, setData, setLoder) => {
  await axios
    .get(BASE_URL + "/api/profesional/" + idProfesional)
    .then(({ data }) => {
      setData(data);
      setLoder(false);
    })
    .catch((err) => {
      Swal.fire({
        title: "error de conexion con el servidor",
        icon: "error",
      });
    });
};
