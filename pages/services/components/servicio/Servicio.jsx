import { useContext, useState } from "react";
import { useRouter } from "next/router";
// import { Button, SubTitle } from "../../../../components/common";
import { DataContext } from "../../../../context/Provider";
import styles from "./servicio.module.scss";
import { Button, Card, Description, Subtitle } from "../../../../styled-components";
import { ContainerText } from "./styled";

const Servicio = ({ servicio }) => {
  const { store } = useContext(DataContext);
  const router = useRouter();
  return (
    <Card center>
      <Subtitle center>{servicio.descuento > 0 && "en Oferta " + servicio.descuento + "%"}</Subtitle>
      <img className={styles.image} src={servicio.foto} alt={servicio.nombreProfesional} />
      <ContainerText>
        <Subtitle>{servicio.NombreServicio}</Subtitle>
        <Subtitle>Precio : S/. {servicio.precio - servicio.precio * (servicio.descuento / 100)}</Subtitle>
        <Description>
          {servicio.nombreProfesional} {servicio.apellidoProfesional}
        </Description>
      </ContainerText>
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
