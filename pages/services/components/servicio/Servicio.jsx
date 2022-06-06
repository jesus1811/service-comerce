import { useRouter } from "next/router";
import { Button, Card, Description, Oferta, Subtitle } from "../../../../styled-components";
import { ContainerText, Image } from "./styled";

const Servicio = ({ servicio }) => {
  const router = useRouter();
  return (
    <Card>
      {servicio.descuento > 0 ? (
        <Oferta center>{"en Oferta " + servicio.descuento + "%"}</Oferta>
      ) : null}
      <Image src={servicio.foto} alt={servicio.nombreProfesional} />
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
