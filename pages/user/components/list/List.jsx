import { useContext } from "react";
import { DataContext } from "../../../../context/Provider";
import { Button, Card, Description, Subtitle } from "../../../../styled-components";
import { Image } from "./Styled";

const List = ({ onClick }) => {
  const { store } = useContext(DataContext);
  return (
    <Card dark={store.onDark}>
      <Image src={store.user[0]?.urlFoto} alt={store.user[0]?.nombreCliente} />
      <Subtitle dark={store.onDark}>DNI</Subtitle>
      <Description dark={store.onDark}>{store.user[0]?.DNI}</Description>
      <Subtitle dark={store.onDark}>Nombre</Subtitle>
      <Description dark={store.onDark}>{store.user[0]?.nombreCliente + "  " + store.user[0]?.apellidoCliente}</Description>
      <Subtitle dark={store.onDark}>Correo</Subtitle>
      <Description dark={store.onDark}>{store.user[0]?.correoCliente}</Description>
      <Button onClick={onClick}>Cambiar Contraseña</Button>
    </Card>
  );
};

export default List;
