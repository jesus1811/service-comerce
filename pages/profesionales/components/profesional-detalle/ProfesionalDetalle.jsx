import { useContext } from "react";
import { DataContext } from "../../../../context/Provider";
import { Card, Description, Subtitle } from "../../../../styled-components";
import { Image } from "./Styled";

const ProfesionalDetalle = ({ profesional }) => {
  const { store } = useContext(DataContext);
  return (
    <Card dark={store.onDark}>
      <Image src={profesional.urlFoto} alt={profesional.nombreProfesional} />
      <Subtitle dark={store.onDark}>
        {profesional.nombreProfesional} {profesional.apellidoProfesional}
      </Subtitle>
      <Description dark={store.onDark}>{profesional.correoProfesional}</Description>
      <Description dark={store.onDark}>{profesional.celularProfesional}</Description>
      <Description dark={store.onDark}>{profesional.nombrePais}</Description>
      <Description dark={store.onDark}>{profesional.direccionDomicilio}</Description>
    </Card>
  );
};

export default ProfesionalDetalle;
