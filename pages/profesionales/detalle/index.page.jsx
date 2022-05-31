import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Button, Loading } from "../../../components/common";
import { ContainerPrimary, Header } from "../../../components/layouts";
import { DataContext } from "../../../context/Provider";
import { getProfesionalServices } from "../../../services/profesional";
import styles from "./detalle.module.scss";
import { getServiciosForProfesionalServices } from "../../../services/servicio";
import { getClienteForProfesionalServices } from "../../../services/cliente";

const Detalle = () => {
  const [profesional, setProfesional] = useState([]);
  const [serviciosProfesional, setServiciosProfesional] = useState([]);
  const [loader, setLoader] = useState(true);
  const [loaderService, setLoaderService] = useState(true);
  const [loaderClientes, setLoaderClientes] = useState(true);
  const [clientes, setClientes] = useState([]);
  const { store } = useContext(DataContext);
  const router = useRouter();
  const handleClickRedirect = () => {
    router.push("/profesionales");
  };
  useEffect(() => {
    const idProfesional = JSON.parse(localStorage.getItem("idProfesional"));
    getProfesionalServices(idProfesional, setProfesional, setLoader);
    getServiciosForProfesionalServices(idProfesional, setServiciosProfesional, setLoaderService);
    getClienteForProfesionalServices(idProfesional, setClientes, setLoaderClientes);
  }, []);
  return (
    <ContainerPrimary>
      <Header />
      <Button onClick={handleClickRedirect}>Regresar</Button>
      {loader ? (
        <Loading />
      ) : (
        <>
          {profesional.map((profesionalSingle, index) => {
            return (
              <>
                <article className={store.onDark ? styles.cardDark : styles.card} key={index}>
                  <img
                    className={styles.image}
                    src={profesionalSingle.urlFoto}
                    alt={profesionalSingle.nombreProfesional}
                  />
                  <h1 className={styles.nameService}>
                    {profesionalSingle.nombreProfesional} {profesionalSingle.apellidoProfesional}
                  </h1>
                  <span className={styles.span}>
                    <img src="/correo.svg" alt="" />
                    <p className={styles.text}>{profesionalSingle.correoProfesional}</p>
                  </span>
                  <span className={styles.span}>
                    <img src="/celular.svg" alt="" />
                    <p className={styles.text}>{profesionalSingle.celularProfesional}</p>
                  </span>
                  <span className={styles.span}>
                    <img src="/pais.svg" alt="" />
                    <p className={styles.text}>{profesionalSingle.nombrePais}</p>
                  </span>
                  <span className={styles.span}>
                    <img src="/direccion.svg" alt="" />
                    <p className={styles.text}>{profesionalSingle.direccionDomicilio}</p>
                  </span>
                </article>
              </>
            );
          })}
        </>
      )}

      <h1 className={store.onDark ? styles.titleDark : styles.title}>¿Que servicios ofrezco?</h1>
      {loaderService ? (
        <Loading />
      ) : (
        <>
          {serviciosProfesional.map((value, index) => {
            return (
              <article className={store.onDark ? styles.cardDark : styles.card} key={index}>
                <img className={styles.imageServicio} src={value.foto} alt={value.nombreProfesional} />
                <p className={styles.nameService}>{value.NombreServicio}</p>
                <p className={styles.nameService}>S/. {value.precio}</p>
                <p className={styles.text}>{value.NombreTipoServicio}</p>
              </article>
            );
          })}
        </>
      )}
      <h1 className={store.onDark ? styles.titleDark : styles.title}>¿Que Clientes Confian en Mi?</h1>
      {loaderClientes ? (
        <Loading />
      ) : (
        <>
          {clientes.map((cliente, index) => {
            return (
              <article className={store.onDark ? styles.cardDark : styles.card} key={index}>
                <img className={styles.imageServicio} src={cliente.urlFoto} alt="" />
                <p className={styles.nameService}>{cliente.nombreCliente}</p>
                <p className={styles.nameService}>{cliente.apellidoCliente}</p>
              </article>
            );
          })}
        </>
      )}
    </ContainerPrimary>
  );
};

export default Detalle;
