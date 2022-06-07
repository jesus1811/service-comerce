import React from "react";
import { Button, Card, Subtitle } from "../../../../styled-components";
import { Image } from "./Styled";

const Profesional = ({ profesional, handleClickRedirect }) => {
  return (
    <Card>
      <Image src={profesional.urlFoto} alt="" />
      <Subtitle>
        {profesional.nombreProfesional} {profesional.apellidoProfesional}
      </Subtitle>
      <Button onClick={() => handleClickRedirect(profesional.idProfesional)}>Ver Detalle</Button>
    </Card>
  );
};

export default Profesional;
