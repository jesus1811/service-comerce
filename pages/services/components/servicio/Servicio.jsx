import { useContext } from "react";
import { useRouter } from "next/router";
import { Button, Card, Description, Oferta, Subtitle } from "../../../../styled-components";
import { ContainerText, Image } from "./Styled";
import { DataContext } from "../../../../context/Provider";

const Servicio = ({ servicio }) => {
  const router = useRouter();
  const { store } = useContext(DataContext);
  return (
    <Card dark={store.onDark}>
      {servicio.descuento > 0 ? <Oferta center>{"en Oferta " + servicio.descuento + "%"}</Oferta> : null}
      <Image src={servicio.foto} alt={servicio.nombreProfesional} />
      <ContainerText>
        <Subtitle dark={store.onDark}>{servicio.NombreServicio}</Subtitle>
        <Subtitle dark={store.onDark}>
          Precio : S/. {servicio.precio - servicio.precio * (servicio.descuento / 100)}
        </Subtitle>
        <Description dark={store.onDark}>
          {servicio.nombreProfesional} {servicio.apellidoProfesional}
        </Description>
      </ContainerText>
      <Button
        dark={store.onDark}
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
