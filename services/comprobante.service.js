import axios from "axios";
import Swal from "sweetalert2";
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const getComprobanteServices = async (idProfesional, setData, setLoader) => {
  await axios
    .get(BASE_URL + "/api/comprobantes/" + idProfesional)
    .then(({ data }) => {
      setData(data);
      setLoader(false);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getComprobanteByIdServices = async (idComprobante, setData, setLoader) => {
  await axios
    .get(BASE_URL + "/api/comprobante/" + idComprobante)
    .then(({ data }) => {
      setData(data);
      setLoader(false);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const postComprobanteServices = async (fecha, idCliente, idMetodo, idServicio, total) => {
  await axios
    .post(BASE_URL + "/api/comprobante", {
      fecha,
      idCliente,
      idMetodo,
      idServicio,
      total,
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
