import { useContext } from "react";
import { DataContext } from "../../../../context/Provider";
import { Card, Description, Subtitle } from "../../../../styled-components";
import { Image } from "./Styled";

const Servicio = ({ comprobanteDetalle }) => {
  const { store } = useContext(DataContext);
  return (
    <Card dark={store.onDark}>
      <Subtitle dark={store.onDark}>Servicio Contratado</Subtitle>
      <Image src={comprobanteDetalle[0]?.foto} alt="" />
      <Subtitle dark={store.onDark}>{comprobanteDetalle[0]?.NombreServicio}</Subtitle>
      <Description dark={store.onDark}>Fecha: {comprobanteDetalle[0]?.fecha}</Description>
      <Description dark={store.onDark}>Tipo: {comprobanteDetalle[0]?.nombreTipoServicio}</Description>
      <Description dark={store.onDark}>Plataforma de Pago: {comprobanteDetalle[0]?.plataformaDePago}</Description>
      {comprobanteDetalle[0]?.precio - comprobanteDetalle[0]?.total === 0 ? (
        <>
          <Subtitle dark={store.onDark}>Total a Pagar: S/.{comprobanteDetalle[0]?.total}</Subtitle>
        </>
      ) : (
        <>
          <Description dark={store.onDark}>Precio Base: S/.{comprobanteDetalle[0]?.precio}</Description>
          <Description dark={store.onDark}>
            Descuento: S/.{comprobanteDetalle[0]?.precio - comprobanteDetalle[0]?.total}
          </Description>
          <Subtitle dark={store.onDark}>Total a Pagar: S/.{comprobanteDetalle[0]?.total}</Subtitle>
        </>
      )}
    </Card>
  );
};

export default Servicio;
