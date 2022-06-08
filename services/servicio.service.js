import axios from "axios";
import Swal from "sweetalert2";
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const getServicioServices = async (setData, setLoader) => {
  await axios
    .get(BASE_URL + "/api/servicio")
    .then(({ data }) => {
      setData(data);
      setLoader(false);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getServicioIdServices = async (id, setData, setLoader) => {
  await axios
    .get(BASE_URL + "/api/servicio/" + id)
    .then(({ data }) => {
      setData(data);
      setLoader(false);
    })
    .catch((err) => {
      console.log(err);
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
      console.log(err);
    });
};
export const postServicioServcices = async (nombre, descripcion, tipo, precio, profesional, foto) => {
  await axios
    .post(BASE_URL + "/api/servicio", {
      nombre,
      descripcion,
      tipo,
      precio,
      profesional,
      foto:
        "https://firebasestorage.googleapis.com/v0/b/crud-image-1acb8.appspot.com/o/" +
        foto +
        "?alt=media&token=449b3048-6b97-42b5-8436-9f926747cc05",
    })
    .then(({ data }) => {
      Swal.fire({
        title: data,
        icon: "success",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const putServiceServices = async (idServicio, nombre, descripcion, precio, descuento) => {
  await axios
    .put(BASE_URL + "/api/servicio/" + idServicio, {
      nombre,
      descripcion,
      precio,
      descuento,
    })
    .then(({ data }) => {
      Swal.fire({
        title: data,
        icon: "success",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const deleteServiceServices = async (idServicio, setLoader) => {
  await axios
    .delete(BASE_URL + "/api/servicio/" + idServicio)
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
