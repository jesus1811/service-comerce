import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../../../../components/common";
import { DataContext } from "../../../../context/Provider";
import styles from "./servicio.module.scss";

const Comprobante = ({ comprobante }) => {
  const { store } = useContext(DataContext);
  const router = useRouter();
  const handleClickRedirect = () => {
    localStorage.setItem("idComprobanteElectronico", JSON.stringify(comprobante.idComprobanteElectronico));
    router.push("/historial/detalle");
  };
  return (
    <article className={store.onDark ? styles.cardDark : styles.card}>
      <h1 className={styles.title}>{comprobante.fecha}</h1>
      <h1 className={styles.name}>{comprobante.NombreServicio}</h1>
      <h1 className={styles.title}>{comprobante.plataformaDePago}</h1>
      <Button onClick={handleClickRedirect}>Ver Detalle</Button>
    </article>
  );
};

export default Comprobante;
