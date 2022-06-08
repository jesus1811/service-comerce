import React from "react";
import { Card, Description, Subtitle } from "../../../../styled-components";
import { Image } from "./Styled";

const Servicio = ({ comprobanteDetalle }) => {
  return (
    <Card>
      <Subtitle>Servicio Contratado</Subtitle>
      <Image src={comprobanteDetalle[0]?.foto} alt="" />
      <Subtitle>{comprobanteDetalle[0]?.NombreServicio}</Subtitle>
      <Description>Fecha: {comprobanteDetalle[0]?.fecha}</Description>
      <Description>Tipo: {comprobanteDetalle[0]?.nombreTipoServicio}</Description>
      <Description>Plataforma de Pago: {comprobanteDetalle[0]?.plataformaDePago}</Description>
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


    </Card>
  );
};

export default Servicio;
