import { useContext } from "react";
import { DataContext } from "../../../../context/Provider";
import { Card, Description, Oferta, Subtitle } from "../../../../styled-components";
import { Image } from "./Styled";

const Servicios = ({ servicio }) => {
  const { store } = useContext(DataContext);
  return (
    <Card dark={store.onDark}>
      {servicio.descuento > 0 && <Oferta>{servicio.descuento > 0 && "en Oferta " + servicio.descuento + "%"}</Oferta>}
      <Image src={servicio.foto} alt={servicio.nombreProfesional} />
      <Subtitle dark={store.onDark}>{servicio.NombreServicio}</Subtitle>
      {servicio.descuento > 0 ? (
        <>
          <Description dark={store.onDark}>Antes S/. {servicio.precio}</Description>
          <Subtitle dark={store.onDark}>
            Ahora S/.{servicio.precio - servicio.precio * (servicio.descuento / 100)}
          </Subtitle>
        </>
      ) : (
        <Subtitle dark={store.onDark}>S/. {servicio.precio}</Subtitle>
      )}

      <Description dark={store.onDark}>{servicio.NombreTipoServicio}</Description>
    </Card>
  );
};

export default Servicios;
