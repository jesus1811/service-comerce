import React, { useEffect, useState, useContext } from "react";
import { Button, ContainerPrimary } from "../../components/common";
import { Header } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import { getServicioServices } from "../../services/servicio";
import styles from "./services.module.scss";

const Services = () => {
  const [loader, setLoader] = useState(true);
  const [servicios, setServicios] = useState([]);
  const { store } = useContext(DataContext);
  useEffect(() => {
    getServicioServices(setServicios, setLoader);
  }, [loader]);

  return (
    <ContainerPrimary>
      <Header />
      <h1 className={styles.titleMain}>{store.categoria}</h1>
      <div className={styles.containerCard}>
        {servicios.map((servicio, index) => {
          return (
            servicio.NombreTipoServicio == store.categoria && (
              <article className={styles.card} key={index}>
                <h1 className={styles.titleCard}>{servicio.NombreServicio}</h1>
                <img src="/time.jpg" alt="" className={styles.imagesCard} />
                <p className={styles.precioCard}>S/. {servicio.precio}</p>
                <p className={styles.profesionalCard}>
                  {servicio.nombreProfesional +
                    " " +
                    servicio.apellidoProfesional}
                </p>
                <div className={styles.containerButtons}>
                  <Button>Ver Servicio</Button>
                </div>
              </article>
            )
          );
        })}
      </div>
    </ContainerPrimary>
  );
};

export default Services;
