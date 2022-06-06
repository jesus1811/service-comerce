import React from "react";
import { Card, Description, Subtitle } from "../../../../styled-components";
import { Image } from "./styled";

const Cliente = ({ comprobanteDetalle }) => {
  return (
    <Card center>
      <Subtitle>Cliente</Subtitle>
      <Image src={comprobanteDetalle[0]?.urlFoto} alt="" />
      <Description>Codigo Cliente: {comprobanteDetalle[0]?.idCliente}</Description>
      <Subtitle center>
        Nombre: {comprobanteDetalle[0]?.nombreCliente} {comprobanteDetalle[0]?.apellidoCliente}
      </Subtitle>
      <Description>Celular: {comprobanteDetalle[0]?.celularCliente}</Description>
    </Card>
  );
};

export default Cliente;
