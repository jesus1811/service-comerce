import { Card, Description, Subtitle } from "../../../../styled-components";
import { Image } from "./styled";

const Profesional = ({ profesional }) => {
  return (
    <Card>
      <Image src={profesional[0]?.urlFoto} alt="" />
      <Subtitle>
        {" "}
        {profesional[0]?.nombreProfesional} {profesional[0]?.apellidoProfesional}
      </Subtitle>
      <Description>{profesional[0]?.correoProfesional}</Description>
      <Description>{profesional[0]?.celularProfesional}</Description>
      <Description>{profesional[0]?.nombrePais}</Description>
      <Description>{profesional[0]?.direccionDomicilio}</Description>
    </Card>
  );
};

export default Profesional;
