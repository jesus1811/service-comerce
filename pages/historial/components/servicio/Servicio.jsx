import React from "react";
import { Card, Description, Subtitle } from "../../../../styled-components";
import { Image } from "./Styled";

const Servicio = ({ comprobanteDetalle }) => {
  return (
    <Card>
      <Subtitle>Servicio Contratado</Subtitle>
      <Image src={comprobanteDetalle[0]?.foto} alt="" />
      <Description>Fecha: {comprobanteDetalle[0]?.fecha}</Description>
      <Subtitle>Nombre: {comprobanteDetalle[0]?.NombreServicio}</Subtitle>
      <Description>Tipo: {comprobanteDetalle[0]?.nombreTipoServicio}</Description>
      {comprobanteDetalle[0]?.precio - comprobanteDetalle[0]?.total === 0 ? (
        <>
          <Subtitle>Total a Pagar: S/.{comprobanteDetalle[0]?.total}</Subtitle>
        </>
      ) : (
        <>
          <Description>Precio Base: S/.{comprobanteDetalle[0]?.precio}</Description>
          <Description>Descuento: S/.{comprobanteDetalle[0]?.precio - comprobanteDetalle[0]?.total}</Description>
          <Subtitle>Total a Pagar: S/.{comprobanteDetalle[0]?.total}</Subtitle>
        </>
      )}

      <Description>Plataforma de Pago: {comprobanteDetalle[0]?.plataformaDePago}</Description>
    </Card>
  );
};

export default Servicio;
