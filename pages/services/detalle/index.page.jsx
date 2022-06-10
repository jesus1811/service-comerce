import { useEffect, useState, useContext } from "react";
import { Container, Header } from "../../../components/layouts";
import { DataContext } from "../../../context/Provider";
import useField from "../../../hooks/useField";
import { getProfesionalServices } from "../../../services/profesional.service";
import { getServicioIdServices } from "../../../services/servicio.service";
import { getValoraciones, postValoracion } from "../../../services/valoracion.service";
import { Button, Card, ContainerCard, Input, Loading, Subtitle, Title } from "../../../styled-components";
import { Comentarios, Profesional, ServicioDetalle } from "../components";

const Detalle = () => {
  const [servicio, setServicio] = useState([]);
  const [profesional, setProfesional] = useState([]);
  const [loader, setLoader] = useState(true);
  const [loaderProfesional, setLoaderProfesional] = useState(true);
  const [loaderValoraciones, setLoaderValoraciones] = useState(true);
  const [valoraciones, setValoraciones] = useState([]);
  const comentario = useField("text");
  const { store } = useContext(DataContext);
  useEffect(() => {
    const { idServicio, idProfesional } = JSON.parse(localStorage.getItem("servicio"));
    getServicioIdServices(idServicio, setServicio, setLoader);
    getProfesionalServices(idProfesional, setProfesional, setLoaderProfesional);
    getValoraciones(idServicio, setValoraciones, setLoaderValoraciones);
  }, []);
  useEffect(() => {
    const { idServicio } = JSON.parse(localStorage.getItem("servicio"));
    getValoraciones(idServicio, setValoraciones, setLoaderValoraciones);
  }, [loaderValoraciones]);
  const fecha = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();
  const handleClickAddValoracion = () => {
    const { idServicio } = JSON.parse(localStorage.getItem("servicio"));
    postValoracion(comentario.value, idServicio, store?.user[0]?.idCliente, setLoaderValoraciones);
    comentario.setValue("");
  };

  return (
    <Container dark={store.onDark}>
      <Header />
      <Title center dark={store.onDark}>
        Detalle del Servicio
      </Title>
      {loader ? <Loading /> : <ServicioDetalle servicio={servicio} fecha={fecha} store={store} />}
      <Subtitle center dark={store.onDark}>
        Comentarios
      </Subtitle>
      <ContainerCard>
        {loaderValoraciones ? (
          <Loading dark={store.onDark}/>
        ) : (
          <>
            <Card dark={store.onDark}>
              <Input {...comentario} dark={store.onDark} />
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <Button onClick={handleClickAddValoracion}>Agregar Comentario</Button>
            </Card>
            {valoraciones.map((valoracion, index) => {
              return <Comentarios valoracion={valoracion} key={index} />;
            })}
          </>
        )}
      </ContainerCard>

      <Subtitle center dark={store.onDark}>
        Informacion Personal del Provedor
      </Subtitle>
      {loaderProfesional ? <Loading dark={store.onDark}/> : <Profesional profesional={profesional} />}
    </Container>
  );
};

export default Detalle;
