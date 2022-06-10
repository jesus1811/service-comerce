import { useContext } from "react";
import { DataContext } from "../../../../context/Provider";
import { Button, Card, Subtitle } from "../../../../styled-components";
import { Image } from "./Styled";

const Profesional = ({ profesional, handleClickRedirect }) => {
  const { store } = useContext(DataContext);
  return (
    <Card dark={store.onDark}>
      <Image src={profesional.urlFoto} alt="" />
      <Subtitle dark={store.onDark}>
        {profesional.nombreProfesional} {profesional.apellidoProfesional}
      </Subtitle>
      <Button onClick={() => handleClickRedirect(profesional.idProfesional)}>Ver Detalle</Button>
    </Card>
  );
};

export default Profesional;
