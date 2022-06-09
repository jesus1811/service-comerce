import { postComprobanteServices } from "../../../../services/comprobante.service";
import { Button, Card, Description, Oferta, Subtitle } from "../../../../styled-components";
import { Image } from "./Styled";

const ServicioDetalle = ({ servicio, fecha, store }) => {
  const handleClickPlin = () => {
    postComprobanteServices(
      fecha,
      store.user[0].idCliente,
      2,
      JSON.parse(localStorage.getItem("servicio")).idServicio,
      servicio[0]?.precio - servicio[0]?.precio * (servicio[0]?.descuento / 100)
    );
  };
  const handleClickYape = () => {
    postComprobanteServices(
      fecha,
      store.user[0].idCliente,
      1,
      JSON.parse(localStorage.getItem("servicio")).idServicio,
      servicio[0]?.precio - servicio[0]?.precio * (servicio[0]?.descuento / 100)
    );
  };
  return (
    <Card>
      {servicio[0]?.descuento > 0 ? <Oferta>{"en Oferta " + servicio[0]?.descuento + "%"}</Oferta> : null}

      <Image src={servicio[0]?.foto} alt="" />
      <Subtitle>{servicio[0]?.NombreServicio}</Subtitle>
      <Description>{servicio[0]?.descripcion}</Description>
      {servicio[0]?.descuento > 0 ? (
        <>
          <Description>Antes S/. {servicio[0]?.precio}</Description>
          <Subtitle>Ahora S/.{servicio[0]?.precio - servicio[0]?.precio * (servicio[0]?.descuento / 100)}</Subtitle>
        </>
      ) : (
        <>
          <Subtitle>S/. {servicio[0]?.precio}</Subtitle>
        </>
      )}

      <Button onClick={handleClickPlin}>pagar por Plin</Button>
      <Button onClick={handleClickYape}>pagar por Yape</Button>
    </Card>
  );
};

export default ServicioDetalle;
