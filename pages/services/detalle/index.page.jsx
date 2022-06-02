import { useEffect, useState, useContext } from "react";
import { Button, Input, Loading } from "../../../components/common";
import { ContainerPrimary, Header } from "../../../components/layouts";
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
  }, []);
  useEffect(() => {
    const { idServicio } = JSON.parse(localStorage.getItem("servicio"));
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
    postComprobanteServices(fecha, store.user[0].idCliente, 1, JSON.parse(localStorage.getItem("servicio")).idServicio);
  };
  const handleClickAddValoracion = () => {
    const { idServicio } = JSON.parse(localStorage.getItem("servicio"));
    postValoracion(comentario.value, idServicio, store?.user[0]?.idCliente, setLoaderValoraciones);
  };

  return (
    <ContainerPrimary>
      <Header />
      <h1 className={store.onDark ? styles.titleDark : styles.title}>Detalle del Servicio</h1>
      {loader ? (
        <Loading />
      ) : (
        <>
          <article className={store.onDark ? styles.cardDark : styles.card}>
            <p className={styles.nameService}>
              {servicio[0]?.descuento > 0 && "en Oferta " + servicio[0]?.descuento + "%"}
            </p>
            <img className={styles.imageService} src={servicio[0]?.foto} alt="" />
            <h1 className={styles.nameService}>{servicio[0]?.NombreServicio}</h1>
            <p className={styles.text}>{servicio[0]?.descripcion}</p>
            {servicio[0]?.descuento > 0 ? (
              <>
                <p className={styles.descuento}>Antes S/. {servicio[0]?.precio}</p>
                <p className={styles.nameService}>
                  Ahora S/.{servicio[0]?.precio - servicio[0]?.precio * (servicio[0]?.descuento / 100)}
                </p>
              </>
            ) : (
              <>
                <p className={styles.nameService}>S/. {servicio[0]?.precio}</p>
              </>
            )}

            <Button onClick={handleClickPlin}>pagar por Plin</Button>
            <Button onClick={handleClickYape}>pagar por Yape</Button>
          </article>
        </>
      )}
      <h1 className={store.onDark ? styles.titleDark : styles.title}>Comentarios</h1>
      {loaderValoraciones ? (
        <Loading />
      ) : (
        <>
          {valoraciones.map((valoracion, index) => {
            return (
              <>
                <article className={store.onDark ? styles.cardClienteDark : styles.cardCliente} key={index}>
                  <div className={styles.user}>
                    <img className={styles.imageCliente} src={valoracion.urlFoto} alt="" />
                    <p className={styles.nameCenter}>
                      {valoracion.nombreCliente} {valoracion.apellidoCliente}
                    </p>
                  </div>
                  <p className={styles.nameCenter}>{valoracion.comentario}</p>
                  {/* <p className={styles.nameCenter}>{JSON.stringify(valoracion)}</p> */}
                </article>
              </>
            );
          })}
          <article className={store.onDark ? styles.cardDarkComentario : styles.cardComentario}>
            <Input {...comentario} />
            <Button onClick={handleClickAddValoracion}>Agregar Comentario</Button>
          </article>
        </>
      )}
      <h1 className={store.onDark ? styles.titleDark : styles.title}>Informacion Personal del Provedor</h1>
      {loaderProfesional ? (
        <Loading />
      ) : (
        <>
          <article className={store.onDark ? styles.cardDark : styles.card}>
            <img className={styles.image} src={profesional[0]?.urlFoto} alt="" />
            <h1 className={styles.nameService}>
              {profesional[0]?.nombreProfesional} {profesional[0]?.apellidoProfesional}
            </h1>
            <p className={styles.text}>{profesional[0]?.correoProfesional}</p>
            <p className={styles.text}>{profesional[0]?.celularProfesional}</p>
            <p className={styles.text}>{profesional[0]?.nombrePais}</p>
            <p className={styles.text}>{profesional[0]?.direccionDomicilio}</p>
          </article>
        </>
      )}
    </ContainerPrimary>
  );
};

export default Detalle;
