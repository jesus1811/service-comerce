import axios from "axios";
import Swal from "sweetalert2";
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const getProfesionalServices = async (idProfesional, setData, setLoader) => {
  await axios
    .get(BASE_URL + "/api/profesional/" + idProfesional)
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
export const validarProfesionalServices = async (email, password, setState, state, setLoader) => {
  email != 0 &&
    password != 0 &&
    (await axios
      .post(BASE_URL + "/api/loginProfesional", {
        email,
        password,
      })
      .then(({ data }) => {
        data.length != 0
          ? (setState({ ...state, userProfesional: data }),
            localStorage.setItem("store", JSON.stringify({ ...state, userProfesional: data })))
          : Swal.fire({
              title: "Correo y/o Contraseña Incorrecta",
            });
      })
      .catch((err) => {
        Swal.fire({
          title: "error de conexion con el servidor",
          icon: "error",
        });
      })
      .finally(() => {
        setLoader(true);
      }));
};
export const getProfesionalesServices = async (setState, setLoader) => {
  await axios
    .get(BASE_URL + "/api/profesional")
    .then(({ data }) => {
      setState(data);
    })
    .catch(() => {
      Swal.fire({
        title: "error de conexion con el servidor",
        icon: "error",
      });
    })
    .finally(() => {
      setLoader(false);
    });
};
