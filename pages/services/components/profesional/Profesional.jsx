import { useContext } from "react";
import { DataContext } from "../../../../context/Provider";
import { Card, Description, Subtitle } from "../../../../styled-components";
import { Image } from "./Styled";

const Profesional = ({ profesional }) => {
  const { store } = useContext(DataContext);
  return (
    <Card dark={store.onDark}>
      <Image src={profesional[0]?.urlFoto} alt="" />
      <Subtitle dark={store.onDark}>
        {" "}
        {profesional[0]?.nombreProfesional} {profesional[0]?.apellidoProfesional}
      </Subtitle>
      <Description dark={store.onDark}>{profesional[0]?.correoProfesional}</Description>
      <Description dark={store.onDark}>{profesional[0]?.celularProfesional}</Description>
      <Description dark={store.onDark}>{profesional[0]?.nombrePais}</Description>
      <Description dark={store.onDark}>{profesional[0]?.direccionDomicilio}</Description>
    </Card>
  );
};

export default Profesional;
