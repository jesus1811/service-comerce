import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Button, Loading } from "../../../components/common";
import { ContainerPrimary, Header } from "../../../components/layouts";
import { DataContext } from "../../../context/Provider";
import { getProfesionalServices } from "../../../services/profesional";
import styles from "./detalle.module.scss";

const Detalle = () => {
  const [profesional, setProfesional] = useState([]);
  const [loader, setLoader] = useState(true);
  const [mantenimiento, setMantenimiento] = useState(true);
  const { store } = useContext(DataContext);
  const router = useRouter();
  const handleClickRedirect = () => {
    router.push("/profesionales");
  };
  useEffect(() => {
    const idProfesional = JSON.parse(localStorage.getItem("idProfesional"));
    getProfesionalServices(idProfesional, setProfesional, setLoader);
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
                <h1 className={store.onDark ? styles.titleDark : styles.title}>
                  {profesionalSingle.nombreProfesional} {profesionalSingle.apellidoProfesional}
                </h1>
                <article className={store.onDark ? styles.cardDark : styles.card} key={index}>
                  <img
                    className={styles.image}
                    src={profesionalSingle.urlFoto}
                    alt={profesionalSingle.nombreProfesional}
                  />
                  <p className={styles.text}>DNI: {profesionalSingle.DNI}</p>

                  <p className={styles.text}>Correo: {profesionalSingle.correoProfesional}</p>
                  <p className={styles.text}>Celular: {profesionalSingle.celularProfesional}</p>
                  <p className={styles.text}>Pais: {profesionalSingle.nombrePais}</p>
                  <p className={styles.text}>Direccion: {profesionalSingle.direccionDomicilio}</p>
                </article>
              </>
            );
          })}
        </>
      )}

      <h1 className={store.onDark ? styles.titleDark : styles.title}>¿Que servicios ofrezco?</h1>
      {mantenimiento ? <Loading /> : null}
      <h1 className={store.onDark ? styles.titleDark : styles.title}>¿Que Clientes Confian en Mi?</h1>
      {mantenimiento ? <Loading /> : null}
    </ContainerPrimary>
  );
};

export default Detalle;
