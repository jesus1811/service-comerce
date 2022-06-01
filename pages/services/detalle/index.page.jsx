import { useEffect, useState, useContext } from "react";
import { Button, Loading } from "../../../components/common";
import { ContainerPrimary, Header } from "../../../components/layouts";
import { DataContext } from "../../../context/Provider";
import { postComprobanteServices } from "../../../services/comprobante.service";
import { getProfesionalServices } from "../../../services/profesional.service";
import { getServicioIdServices } from "../../../services/servicio.service";
import styles from "./detalle.module.scss";

const Detalle = () => {
  const [servicio, setServicio] = useState([]);
  const [profesional, setProfesional] = useState([]);
  const [loader, setLoader] = useState(true);
  const { store } = useContext(DataContext);
  useEffect(() => {
    const { idServicio, idProfesional } = JSON.parse(localStorage.getItem("servicio"));
    getServicioIdServices(idServicio, setServicio, setLoader);
    getProfesionalServices(idProfesional, setProfesional, setLoader);
  }, [loader]);
  const fecha = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();
  const handleClickPlin = () => {
    postComprobanteServices(fecha, store.user[0].idCliente, 2, JSON.parse(localStorage.getItem("servicio")).idServicio);
    //2
  };
  const handleClickYape = () => {
    postComprobanteServices(fecha, store.user[0].idCliente, 1, JSON.parse(localStorage.getItem("servicio")).idServicio);
  };

  return (
    <ContainerPrimary>
      <Header />
      {loader ? (
        <Loading />
      ) : (
        <>
          <h1 className={store.onDark ? styles.titleDark : styles.title}>Detalle del Servicio</h1>
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
          <h1 className={store.onDark ? styles.titleDark : styles.title}>Informacion Personal del Provedor</h1>
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
