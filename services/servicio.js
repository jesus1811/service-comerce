import axios from "axios";
import Swal from "sweetalert2";
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const getServicioServices = async (setData, setLoder) => {
  await axios
    .get(BASE_URL + "/api/servicio")
    .then(({ data }) => {
      setData(data);
      setLoder(false);
    })
    .catch((err) => {
      Swal.fire({
        title: JSON.stringify(err),
        icon: "error",
      });
    });
};
export const getServicioIdServices = async (id, setData, setLoder) => {
  await axios
    .get(BASE_URL + "/api/servicio/" + id)
    .then(({ data }) => {
      setData(data);
      setLoder(false);
    })
    .catch((err) => {
      Swal.fire({
        title: JSON.stringify(err),
        icon: "error",
      });
    });
};

export const getServiciosForProfesionalServices = async (idProfesional, setData, setLoader) => {
  await axios
    .get(BASE_URL + "/api/serviciosForProfesional/" + idProfesional)
    .then(({ data }) => {
      setData(data);
      setLoader(false);
    })
    .catch((err) => {
      Swal.fire({
        title: JSON.stringify(err),
        icon: "error",
      });
    });
};
