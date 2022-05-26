import { useEffect, useState, useContext } from "react";
import { Button, Loading } from "../../../components/common";
import { ContainerPrimary, Header } from "../../../components/layouts";
import { DataContext } from "../../../context/Provider";
import { getProfesionalServices } from "../../../services/profesional";
import { getServicioIdServices, getServiciosForProfesionalServices } from "../../../services/servicio";
import { ServicioProfesional } from "./components";
import styles from "./detalle.module.scss";

const Detalle = () => {
  const [servicio, setServicio] = useState([]);
  const [serviciosProfesional, setServiciosProfesional] = useState([]);
  const [profesional, setProfesional] = useState([]);
  const [loader, setLoader] = useState(true);
  const { store } = useContext(DataContext);
  useEffect(() => {
    const { idServicio, idProfesional } = JSON.parse(localStorage.getItem("servicio"));
    getServicioIdServices(idServicio, setServicio, setLoader);
    getServiciosForProfesionalServices(idProfesional, setServiciosProfesional, setLoader);
    getProfesionalServices(idProfesional, setProfesional, setLoader);
  }, [loader]);

  return (
    <ContainerPrimary>
      <Header />
      {loader ? (
        <Loading />
      ) : (
        <>
          <h1 className={styles.titleMain}>{servicio[0]?.NombreServicio}</h1>
          <img src={servicio[0]?.foto} alt="" width="200px" height="200px" className={styles.images} />
          <br />
          <div className={styles.containerDesc}>
            <h1 className={styles.desripcion}>{servicio[0]?.descripcion}</h1>
            <h1 className={styles.precio}>S/. {servicio[0]?.precio}</h1>
          </div>

          <Button onClick={() => {}}>solicitar servicio</Button>

          <h1 className={store?.onDark ? styles.titleMainDark : styles.titleMain}>Otros servicios del profesional</h1>

          <br />

          <div className={styles.containerCard}>
            {serviciosProfesional.map((servicioProfesional, index) => {
              return (
                <>
                  <ServicioProfesional servicioProfesional={servicioProfesional} key={index} />
                </>
              );
            })}
          </div>
          <h1 className={store.onDark ? styles.titleMainDark : styles.titleMain}>
            Informacion personal del profesional
          </h1>
          <div className={styles.containerProfesional}>
            <article>
              <h1 className={styles.cardNombre}>
                {profesional[0]?.nombreProfesional + " " + profesional[0]?.apellidoProfesional}
              </h1>
              <img src={profesional[0]?.urlFoto} alt="" />
            </article>
            <article>
              <h1 className={styles.cardInformation}>{profesional[0]?.correoProfesional}</h1>
              <h1 className={styles.cardInformation}>{profesional[0]?.celularProfesional}</h1>
              <h1 className={styles.cardInformation}>{profesional[0]?.nombrePais}</h1>
              <h1 className={styles.cardInformation}>{profesional[0]?.direccionDomicilio}</h1>
            </article>
          </div>
        </>
      )}
    </ContainerPrimary>
  );
};

export default Detalle;
