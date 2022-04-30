import axios from "axios";
import Swal from "sweetalert2";
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const getTipoServices = async (setState, setLoader) => {
  await axios
    .get(BASE_URL + "/api/tipoServicio")
    .then((res) => {
      setState(res.data);
      setLoader(false);
    })
    .catch((err) => {
      // alert(JSON.stringify(e));
      Swal.fire({
        title: JSON.stringify(err),
        icon: "error",
      });
    });
};
