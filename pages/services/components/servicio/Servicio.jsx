import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../../../../components/common";
import { DataContext } from "../../../../context/Provider";
import styles from "./servicio.module.scss";

const Servicio = ({ servicio }) => {
  const { store } = useContext(DataContext);
  const router = useRouter();
  return (
    <article className={styles.card}>
      <h1 className={store.onDark ? styles.titleDark : styles.title}>{servicio.NombreServicio}</h1>
      <img src={servicio.foto} alt="" className={styles.images} />
      <div className={styles.containerPrecio}>
        <p className={styles.precio}>S/. {servicio.precio}</p>
        <p className={styles.profesional}>{servicio.nombreProfesional + " " + servicio.apellidoProfesional}</p>
      </div>

      <div className={styles.containerButtons}>
        <Button
          onClick={() => {
            router.push("services/detalle");
            localStorage.setItem("idServicio", JSON.stringify(servicio.idServicio));
          }}
        >
          Ver Detalle
        </Button>
      </div>
    </article>
  );
};

export default Servicio;
