import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Button, SubTitle } from "../../../../components/common";
import { DataContext } from "../../../../context/Provider";
import styles from "./servicio.module.scss";
import { Card } from "../../../../components/layouts";

const Servicio = ({ servicio }) => {
  const { store } = useContext(DataContext);
  const router = useRouter();
  return (
    <Card>
      <p className={styles.nameService}>{servicio.descuento > 0 && "en Oferta " + servicio.descuento + "%"}</p>
      <img className={styles.image} src={servicio.foto} alt={servicio.nombreProfesional} />
      <SubTitle>{servicio.NombreServicio}</SubTitle>
      <SubTitle>Precio : S/. {servicio.precio - servicio.precio * (servicio.descuento / 100)}</SubTitle>
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
    </Card>
  );
};

export default Servicio;
