import React from "react";
import { Card, Description, Subtitle } from "../../../../styled-components";
import { Image } from "./Styled";
const Cliente = ({ comprobanteDetalle }) => {
  return (
    <Card>
      <Subtitle center>Cliente</Subtitle>
      <Image src={comprobanteDetalle[0]?.urlFoto} alt="" />
      <Subtitle>
        {comprobanteDetalle[0]?.nombreCliente} {comprobanteDetalle[0]?.apellidoCliente}
      </Subtitle>
      <Description>Codigo Cliente: {comprobanteDetalle[0]?.idCliente}</Description>
      <Description>Celular: {comprobanteDetalle[0]?.celularCliente}</Description>
    </Card>
  );
};

export default Cliente;
