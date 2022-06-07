import { Card, Description, Subtitle } from "../../../../styled-components";
import { Image } from "./styled";

const ProfesionalDetalle = ({ profesional }) => {
  return (
    <Card>
      <Image src={profesional.urlFoto} alt={profesional.nombreProfesional} />
      <Subtitle>
        {profesional.nombreProfesional} {profesional.apellidoProfesional}
      </Subtitle>
      <Description>{profesional.correoProfesional}</Description>
      <Description>{profesional.celularProfesional}</Description>
      <Description>{profesional.nombrePais}</Description>
      <Description>{profesional.direccionDomicilio}</Description>
    </Card>
  );
};

export default ProfesionalDetalle;
