import axios from "axios";
import Swal from "sweetalert2";
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const validarclienteServices = async (email, password, setState, state, setLoader) => {
  email != 0 &&
    password != 0 &&
    (await axios
      .post(BASE_URL + "/api/login", {
        email,
        password,
      })
      .then(({ data }) => {
        data.length != 0
          ? (setState({ ...state, user: data }),
            localStorage.setItem("store", JSON.stringify({ ...state, user: data })),
            setLoader(true))
          : Swal.fire({
              title: "Correo y/o Contraseña Incorrecta",
            });
      })
      .catch((err) => {
        Swal.fire({
          title: JSON.stringify(err),
          icon: "error",
        });
      }));
};
export const postClienteServices = async (dni, nombre, apellido, correo, password, celular, foto, router) => {
  await axios
    .post(BASE_URL + "/api/cliente", {
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
    })
    .then(({ data }) => {
      Swal.fire({
        title: data,
        icon: "success",
      });
      router.push("/");
    })
    .catch((err) => {
      Swal.fire({
        title: JSON.stringify(err),
        icon: "error",
      });
    });
};
export const putPasswordCliente = async (id, password) => {
  await axios
    .put(BASE_URL + "/api/cliente/" + id, {
      password,
    })
    .then(({ data }) => {
      Swal.fire({
        title: data,
        icon: "success",
      });
    })
    .catch((err) => {
      Swal.fire({
        title: JSON.stringify(err),
        icon: "error",
      });
    });
};
