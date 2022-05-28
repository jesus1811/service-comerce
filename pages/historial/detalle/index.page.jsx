import { useContext, useState, useEffect } from "react";
import { Button } from "../../../components/common";
import { ContainerPrimary, Header } from "../../../components/layouts";
import { DataContext } from "../../../context/Provider";
import { getComprobanteByIdServices } from "../../../services/comprobante";
import styles from "./detalle.module.scss";

const Detalle = () => {
  const { store } = useContext(DataContext);
  const [comprobanteDetalle, setComprobanteDetalle] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const idComprobante = JSON.parse(localStorage.getItem("idComprobanteElectronico"));
    getComprobanteByIdServices(idComprobante, setComprobanteDetalle, setLoader);
  }, []);
  return (
    <ContainerPrimary>
      <Header />
      <h1 className={store.onDark ? styles.titleDarkMain : styles.titleMain}>Boleta</h1>
      <h1 className={store.onDark ? styles.titleDark : styles.title}>Provedor</h1>
      <article className={store.onDark ? styles.cardDark : styles.card}>
        <img className={styles.image} src={comprobanteDetalle[0]?.fotoProfesional} alt="" />
        <p className={styles.name}>Codigo Provedor: {comprobanteDetalle[0]?.idProfesional}</p>
        <p className={styles.name}>
          Nombre: {comprobanteDetalle[0]?.nombreProfesional} {comprobanteDetalle[0]?.apellidoProfesional}
        </p>
        <p className={styles.name}>Celular: {comprobanteDetalle[0]?.celularProfesional}</p>
        <p className={styles.name}>Docimilio: {comprobanteDetalle[0]?.direccionDomicilio}</p>
      </article>
      <h1 className={store.onDark ? styles.titleDark : styles.title}>Cliente</h1>
      <article className={store.onDark ? styles.cardDark : styles.card}>
        <img className={styles.image} src={comprobanteDetalle[0]?.urlFoto} alt="" />
        <p className={styles.name}>Codigo Cliente: {comprobanteDetalle[0]?.idCliente}</p>
        <p className={styles.name}>
          Nombre: {comprobanteDetalle[0]?.nombreCliente} {comprobanteDetalle[0]?.apellidoCliente}
        </p>
        <p className={styles.name}>Celular: {comprobanteDetalle[0]?.celularCliente}</p>
      </article>
      <h1 className={store.onDark ? styles.titleDark : styles.title}>Servicios Contratados</h1>
      <article className={store.onDark ? styles.cardDark : styles.card}>
        <img className={styles.image} src={comprobanteDetalle[0]?.foto} alt="" />
        <p className={styles.name}>Fecha: {comprobanteDetalle[0]?.fecha}</p>
        <p className={styles.name}>Nombre: {comprobanteDetalle[0]?.NombreServicio}</p>
        <p className={styles.name}>Tipo: {comprobanteDetalle[0]?.nombreTipoServicio}</p>
        <p className={styles.name}>Total Pagado: S/.{comprobanteDetalle[0]?.precio}</p>
        <p className={styles.name}>Plataforma de Pago: {comprobanteDetalle[0]?.plataformaDePago}</p>
      </article>
    </ContainerPrimary>
  );
};

export default Detalle;
