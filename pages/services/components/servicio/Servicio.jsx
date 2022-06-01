import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../../../../components/common";
import { DataContext } from "../../../../context/Provider";
import styles from "./servicio.module.scss";

const Servicio = ({ servicio }) => {
  const { store } = useContext(DataContext);
  const router = useRouter();
  return (
    <article className={store.onDark ? styles.cardDark : styles.card}>
      <p className={styles.nameService}>{servicio.descuento > 0 && "en Oferta " + servicio.descuento + "%"}</p>
      <img className={styles.image} src={servicio.foto} alt={servicio.nombreProfesional} />
      <p className={styles.nameService}>{servicio.NombreServicio}</p>
      <p className={styles.nameService}>S/. {servicio.precio - servicio.precio * (servicio.descuento / 100)}</p>
      <p className={styles.text}>
        {servicio.nombreProfesional} {servicio.apellidoProfesional}
      </p>
      <Button
        onClick={() => {
          router.push("services/detalle");
          localStorage.setItem("servicio", JSON.stringify(servicio));
        }}
      >
        Ver Detalle
      </Button>
    </article>
  );
};

export default Servicio;
