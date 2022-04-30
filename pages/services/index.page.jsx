import React, { useEffect, useState, useContext } from "react";
import { ContainerPrimary } from "../../components/common";
import { Header } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import { getServicioServices } from "../../services/servicio";
import { Servicio } from "./components";
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
              <Servicio servicio={servicio} key={index} />
            )
          );
        })}
      </div>
    </ContainerPrimary>
  );
};

export default Services;
