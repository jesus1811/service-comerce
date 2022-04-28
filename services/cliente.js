import axios from "axios";
import Swal from "sweetalert2";
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const validarclienteServices = async (
  email,
  password,
  setState,
  state,
  loader,
  setLoader,
) => {
  await axios
    .post(BASE_URL + "/api/login", {
      email,
      password,
    })
    .then(({ data }) => {
      setState({ ...state, user: data });
      localStorage.setItem("store", JSON.stringify({ ...state, user: data }));
      setLoader(!loader);
    })
    .catch((e) => {
      alert(JSON.stringify("erorr" + e));
      
    });
};
export const postClienteServices = async (
  dni,
  nombre,
  apellido,
  correo,
  password,
  celular,
  foto
) => {
  await axios
    .post(BASE_URL + "/api/cliente", {
      dni,
      nombre,
      apellido,
      correo,
      password,
      celular,
      foto,
    })
    .then(({ data }) => {
      // alert(JSON.stringify(data));
      Swal.fire({
        title: JSON.stringify(data),
        icon: "success",
      });
    })
    .catch((e) => {
      alert(JSON.stringify(e));
    });
};
