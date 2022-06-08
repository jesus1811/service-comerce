import React from "react";
import { Card, Description, Subtitle } from "../../../../styled-components";
import { Image } from "./Styled";

const Provedor = ({ comprobanteDetalle }) => {
  return (
    <Card>
      <Subtitle center>Provedor</Subtitle>
      <Image src={comprobanteDetalle[0]?.fotoProfesional} alt={comprobanteDetalle[0]?.nombreProfesional} />
      <Subtitle>
        {comprobanteDetalle[0]?.nombreProfesional} {comprobanteDetalle[0]?.apellidoProfesional}
      </Subtitle>
      <Description>Codigo Provedor: {comprobanteDetalle[0]?.idProfesional}</Description>
      <Description>Celular: {comprobanteDetalle[0]?.celularProfesional}</Description>
      <Description>Docimilio: {comprobanteDetalle[0]?.direccionDomicilio}</Description>
    </Card>
  );
};

export default Provedor;
