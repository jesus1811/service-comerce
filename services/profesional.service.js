import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const getProfesionalServices = async (idProfesional, setData, setLoader) => {
  await axios
    .get(BASE_URL + "/api/profesional/" + idProfesional)
    .then(({ data }) => {
      setData(data);
      setLoader(false);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const validarProfesionalServices = async (email, password, setState, state, setLoader, setError) => {
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
            localStorage.setItem("store", JSON.stringify({ ...state, userProfesional: data })),
            localStorage.setItem("idProfesional", JSON.stringify(data)))
          : setError(true);
        setLoader(true);
      })
      .catch((err) => {
        console.log(err);
      }));
};
export const getProfesionalesServices = async (setState, setLoader) => {
  await axios
    .get(BASE_URL + "/api/profesional")
    .then(({ data }) => {
      setState(data);
      setLoader(false);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const postProfesional = async (
  dni,
  nombre,
  apellido,
  correo,
  password,
  celular,
  foto,
  pais,
  domicilio,
  router
) => {
  await axios
    .post(BASE_URL + "/api/profesional", {
      dni,
      nombre,
      apellido,
      correo,
      password,
      celular,
      foto:
        "https://firebasestorage.googleapis.com/v0/b/crud-image-1acb8.appspot.com/o/" +
        foto +
        "?alt=media&token=449b3048-6b97-42b5-8436-9f926747cc05",
      pais,
      domicilio,
    })
    .then(({ data }) => {
      Swal.fire({
        title: data,
        icon: "success",
      });
      router.push("/profesional");
    })
    .catch((err) => {
      console.log(err);
    });
};
