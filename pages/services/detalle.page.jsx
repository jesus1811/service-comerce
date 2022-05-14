import { useEffect, useState } from "react";
import { Button, Loading } from "../../components/common";
import { ContainerPrimary, Header } from "../../components/layouts";
import { getServicioIdServices } from "../../services/servicio";

const detalle = () => {
  const [servicio, setServicio] = useState([]);
  const [loader, setLoader] = useState(true);
  const [idServicio, setIdServicio] = useState(
    (typeof window != "undefined" && JSON.parse(localStorage.getItem("idServicio"))) || null
  );
  useEffect(() => {
    getServicioIdServices(idServicio, setServicio, setLoader);
  }, []);

  return (
    <ContainerPrimary>
      <Header />
      {loader ? (
        <Loading />
      ) : (
        <>
          <img src={servicio[0]?.foto} alt="" width="200px" height="200px" />
          <h1>{servicio[0]?.NombreServicio}</h1>
          <h1>{servicio[0]?.descripcion}</h1>
          <h1>S/. {servicio[0]?.precio}</h1>
          <Button onClick={() => {}}>solicitar servicio</Button>

          <h1>{JSON.stringify(servicio, null, 2)}</h1>
        </>
      )}
    </ContainerPrimary>
  );
};

export default detalle;
