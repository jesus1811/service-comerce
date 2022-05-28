import { useEffect, useState, useContext } from "react";
import { Button, Loading } from "../../../components/common";
import { ContainerPrimary, Header } from "../../../components/layouts";
import { DataContext } from "../../../context/Provider";
import { getProfesionalServices } from "../../../services/profesional";
import { getServicioIdServices} from "../../../services/servicio";
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

  return (
    <ContainerPrimary>
      <Header />
      {loader ? (
        <Loading />
      ) : (
        <>
        <h1 className={store.onDark ? styles.titleDark : styles.title}>Detalle del Servicio</h1>
          <article className={store.onDark ? styles.cardDark : styles.card}>
            <img className={styles.imageService} src={servicio[0]?.foto} alt="" />
            <h1 className={styles.nameService}>{servicio[0]?.NombreServicio}</h1>
            <p className={styles.text}>{servicio[0]?.descripcion}</p>
            <p className={styles.nameService}>S/. {servicio[0]?.precio}</p>
            <Button onClick={() => {}}>solicitar servicio</Button>
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
