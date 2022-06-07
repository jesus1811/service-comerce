import React from "react";
import { Card, Description, Oferta, Subtitle } from "../../../../styled-components";
import { Image } from "./styled";

const Servicios = ({ servicio }) => {
  return (
    <Card>
      {servicio.descuento > 0 && <Oferta>{servicio.descuento > 0 && "en Oferta " + servicio.descuento + "%"}</Oferta>}
      <Image src={servicio.foto} alt={servicio.nombreProfesional} />
      <Subtitle>{servicio.NombreServicio}</Subtitle>
      {servicio.descuento > 0 ? (
        <>
          <Description>Antes S/. {servicio.precio}</Description>
          <Subtitle>Ahora S/.{servicio.precio - servicio.precio * (servicio.descuento / 100)}</Subtitle>
        </>
      ) : (
        <Subtitle>S/. {servicio.precio}</Subtitle>
      )}

      <Description>{servicio.NombreTipoServicio}</Description>
    </Card>
  );
};

export default Servicios;
