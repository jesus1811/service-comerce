import { useEffect, useState, useContext } from "react";
import { Button, Loading } from "../../../components/common";
import { ContainerPrimary, Header } from "../../../components/layouts";
import { DataContext } from "../../../context/Provider";
import { getProfesionalServices } from "../../../services/profesional";
import { getServicioIdServices, getServiciosForProfesionalServices } from "../../../services/servicio";
import styles from "./detalle.module.scss";

const Detalle = () => {
  const [servicio, setServicio] = useState([]);
  const [serviciosProfesional, setServiciosProfesional] = useState([]);
  const [profesional, setProfesional] = useState([]);
  const [loader, setLoader] = useState(true);
  const { store } = useContext(DataContext);
  useEffect(() => {
    getServicioIdServices(JSON.parse(localStorage.getItem("servicio")).idServicio, setServicio, setLoader);
    getServiciosForProfesionalServices(
      JSON.parse(localStorage.getItem("servicio")).idProfesional,
      setServiciosProfesional,
      setLoader
    );
    getProfesionalServices(JSON.parse(localStorage.getItem("servicio")).idProfesional, setProfesional, setLoader);
  }, []);

  return (
    <ContainerPrimary>
      <Header />
      {loader ? (
        <Loading />
      ) : (
        <>
          <img src={servicio[0]?.foto} alt="" width="200px" height="200px" />
          <h1 className={store.onDark ? styles.titleDark : styles.title}>{servicio[0]?.NombreServicio}</h1>
          <br />
          <h1 className={store.onDark ? styles.titleDark : styles.title}>{servicio[0]?.descripcion}</h1>
          <h1 className={store.onDark ? styles.titleDark : styles.title}>S/. {servicio[0]?.precio}</h1>
          <Button onClick={() => {}}>solicitar servicio</Button>

          <h1 className={store.onDark ? styles.titleMainDark : styles.titleMain}>Otros servicios del profesional</h1>

          <br />

          <div className={styles.containerCard}>
            {serviciosProfesional.map((servicioProfesional, index) => {
              return (
                <>
                  <article className={styles.card} key={index}>
                    <h1 className={styles.title}>{servicioProfesional.NombreServicio}</h1>
                    <img src={servicioProfesional.foto} alt="" className={styles.images} />
                    <div className={styles.containerPrecio}>
                      <p className={styles.precio}>S/. {servicioProfesional.precio}</p>
                    </div>

                    <div className={styles.containerButtons}></div>
                  </article>
                </>
              );
            })}
          </div>
          <br />

          <h1 className={store.onDark ? styles.titleMainDark : styles.titleMain}>
            Informacion personal del profesional
          </h1>
          <h1 className={store.onDark ? styles.titleDark : styles.title}>EN MANTENIMIENTO</h1>
          <h1 className={store.onDark ? styles.titleDark : styles.title}>
            ......................................................................
          </h1>
          <h1 className={store.onDark ? styles.titleDark : styles.title}>{JSON.stringify(profesional[0], null, 2)}</h1>
          <h1 className={store.onDark ? styles.titleDark : styles.title}>
            .......................................................................
          </h1>
          <h1 className={store.onDark ? styles.titleDark : styles.title}>
            {profesional[0]?.nombreProfesional + " " + profesional[0]?.apellidoProfesional}
          </h1>
          <h1 className={store.onDark ? styles.titleDark : styles.title}>{profesional[0]?.DNI}</h1>
          <img src={profesional[0]?.urlFoto} alt="" />
        </>
      )}
    </ContainerPrimary>
  );
};

export default Detalle;
