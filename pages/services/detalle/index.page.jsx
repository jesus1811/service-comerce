import { useEffect, useState, useContext } from "react";
import { Button, Description, Input, Loading, SubTitle, TitleMain } from "../../../components/common";
import { Card, ContainerPrimary, Header } from "../../../components/layouts";
import { DataContext } from "../../../context/Provider";
import useField from "../../../hooks/useField";
import { postComprobanteServices } from "../../../services/comprobante.service";
import { getProfesionalServices } from "../../../services/profesional.service";
import { getServicioIdServices } from "../../../services/servicio.service";
import { getValoraciones, postValoracion } from "../../../services/valoracion.service";
import styles from "./detalle.module.scss";

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
    const { idServicio, idProfesional } = JSON.parse(localStorage.getItem("servicio"));
    getValoraciones(idServicio, setValoraciones, setLoaderValoraciones);
  }, [loaderValoraciones]);
  const fecha = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();
  const handleClickPlin = () => {
    postComprobanteServices(
      fecha,
      store.user[0].idCliente,
      2,
      JSON.parse(localStorage.getItem("servicio")).idServicio,
      servicio[0]?.precio - servicio[0]?.precio * (servicio[0]?.descuento / 100)
    );
  };
  const handleClickYape = () => {
    postComprobanteServices(
      fecha,
      store.user[0].idCliente,
      1,
      JSON.parse(localStorage.getItem("servicio")).idServicio,
      servicio[0]?.precio - servicio[0]?.precio * (servicio[0]?.descuento / 100)
    );
  };
  const handleClickAddValoracion = () => {
    const { idServicio } = JSON.parse(localStorage.getItem("servicio"));
    postValoracion(comentario.value, idServicio, store?.user[0]?.idCliente, setLoaderValoraciones);
    comentario.setValue("");
  };

  return (
    <ContainerPrimary>
      <Header />
      <TitleMain>Detalle del Servicio</TitleMain>
      {loader ? (
        <Loading />
      ) : (
        <>
          <Card>
            <p className={styles.nameService}>
              {servicio[0]?.descuento > 0 && "en Oferta " + servicio[0]?.descuento + "%"}
            </p>
            <img className={styles.imageService} src={servicio[0]?.foto} alt="" />
            <SubTitle>{servicio[0]?.NombreServicio}</SubTitle>
            <Description>{servicio[0]?.descripcion}</Description>
            {servicio[0]?.descuento > 0 ? (
              <>
                <SubTitle>Antes S/. {servicio[0]?.precio}</SubTitle>
                <SubTitle>
                  Ahora S/.{servicio[0]?.precio - servicio[0]?.precio * (servicio[0]?.descuento / 100)}
                </SubTitle>
              </>
            ) : (
              <>
                <SubTitle>S/. {servicio[0]?.precio}</SubTitle>
              </>
            )}

            <Button onClick={handleClickPlin}>pagar por Plin</Button>
            <Button onClick={handleClickYape}>pagar por Yape</Button>
          </Card>
        </>
      )}
      <SubTitle>Comentarios</SubTitle>
      {loaderValoraciones ? (
        <Loading />
      ) : (
        <>
          {valoraciones.map((valoracion, index) => {
            return (
              <>
                <Card>
                  <img className={styles.imageCliente} src={valoracion.urlFoto} alt="" />
                  <Description> {valoracion.nombreCliente} {valoracion.apellidoCliente}</Description>
                  <Description>{valoracion.comentario}</Description>
                </Card>
              </>
            );
          })}
          <Card>
            <Input {...comentario} />
            <Button onClick={handleClickAddValoracion}>Agregar Comentario</Button>
          </Card>
        </>
      )}
      <SubTitle>Informacion Personal del Provedor</SubTitle>
      {loaderProfesional ? (
        <Loading />
      ) : (
        <>
          <Card>
            <img className={styles.image} src={profesional[0]?.urlFoto} alt="" />
            <SubTitle>
              {" "}
              {profesional[0]?.nombreProfesional} {profesional[0]?.apellidoProfesional}
            </SubTitle>
            <Description>{profesional[0]?.correoProfesional}</Description>
            <Description>{profesional[0]?.celularProfesional}</Description>
            <Description>{profesional[0]?.nombrePais}</Description>
            <Description>{profesional[0]?.direccionDomicilio}</Description>
          </Card>
        </>
      )}
    </ContainerPrimary>
  );
};

export default Detalle;
