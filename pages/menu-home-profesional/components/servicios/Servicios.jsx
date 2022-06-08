import { Button, Card, Oferta, Subtitle } from "../../../../styled-components";
import { ContainerButtons, ContainerText, Image } from "./Styled";
import { useRouter } from "next/router";
import { deleteServiceServices } from "../../../../services/servicio.service";

const Servicios = ({ servicio, setLoader }) => {
  const router = useRouter();
  const handleClickRedirectEditar = () => {
    localStorage.setItem("servicio", JSON.stringify(servicio));
    router.push("/editar-servicio");
  };
  const handleClickEliminar = () => {
    deleteServiceServices(servicio.idServicio, setLoader);
  };
  return (
    <Card>
      {servicio.descuento > 0 && <Oferta>{"en Oferta " + servicio.descuento + "%"}</Oferta>}
      <Image src={servicio.foto} alt={servicio.nombreProfesional} />
      <ContainerText>
        <Subtitle>{servicio.NombreServicio}</Subtitle>
        <Subtitle>Precio : S/. {servicio.precio - servicio.precio * (servicio.descuento / 100)}</Subtitle>
      </ContainerText>
      <ContainerButtons>
        <Button variant onClick={handleClickRedirectEditar}>
          Editar
        </Button>
        <Button danger onClick={handleClickEliminar}>
          Eliminar
        </Button>
      </ContainerButtons>
    </Card>
  );
};

export default Servicios;
