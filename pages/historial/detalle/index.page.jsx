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
      <h1 className={store.onDark ? styles.titleDark : styles.title}>Boleta</h1>

      <article className={store.onDark ? styles.cardDark : styles.card}>
        <h1 className={styles.subTitle}>Provedor</h1>
        <img className={styles.image} src={comprobanteDetalle[0]?.fotoProfesional} alt="" />
        <p className={styles.text}>Codigo Provedor: {comprobanteDetalle[0]?.idProfesional}</p>
        <p className={styles.text}>
          Nombre: {comprobanteDetalle[0]?.nombreProfesional} {comprobanteDetalle[0]?.apellidoProfesional}
        </p>
        <p className={styles.text}>Celular: {comprobanteDetalle[0]?.celularProfesional}</p>
        <p className={styles.text}>Docimilio: {comprobanteDetalle[0]?.direccionDomicilio}</p>
      </article>
      <article className={store.onDark ? styles.cardDark : styles.card}>
        <h1 className={styles.subTitle}>Cliente</h1>
        <img className={styles.image} src={comprobanteDetalle[0]?.urlFoto} alt="" />
        <p className={styles.text}>Codigo Cliente: {comprobanteDetalle[0]?.idCliente}</p>
        <p className={styles.text}>
          Nombre: {comprobanteDetalle[0]?.nombreCliente} {comprobanteDetalle[0]?.apellidoCliente}
        </p>
        <p className={styles.text}>Celular: {comprobanteDetalle[0]?.celularCliente}</p>
      </article>
      <article className={store.onDark ? styles.cardDark : styles.card}>
        <h1 className={styles.subTitle}>Servicios Contratados</h1>
        <img className={styles.image} src={comprobanteDetalle[0]?.foto} alt="" />
        <p className={styles.text}>Fecha: {comprobanteDetalle[0]?.fecha}</p>
        <p className={styles.text}>Nombre: {comprobanteDetalle[0]?.NombreServicio}</p>
        <p className={styles.text}>Tipo: {comprobanteDetalle[0]?.nombreTipoServicio}</p>
        <p className={styles.text}>Total Pagado: S/.{comprobanteDetalle[0]?.precio}</p>
        <p className={styles.text}>Plataforma de Pago: {comprobanteDetalle[0]?.plataformaDePago}</p>
      </article>
    </ContainerPrimary>
  );
};

export default Detalle;
