import { useRouter } from "next/router";
import { Button, Card, Description, Subtitle } from "../../../../styled-components";

const Comprobante = ({ comprobante }) => {
  const router = useRouter();
  const handleClickRedirect = () => {
    localStorage.setItem("idComprobanteElectronico", JSON.stringify(comprobante.idComprobanteElectronico));
    router.push("/historial/detalle");
  };
  return (
    <Card center>
      <Description center>{comprobante.fecha}</Description>
      <Subtitle center>{comprobante.NombreServicio}</Subtitle>
      <Description>{comprobante.plataformaDePago}</Description>
      <Button onClick={handleClickRedirect}>Ver Detalle</Button>
    </Card>
  );
};

export default Comprobante;
