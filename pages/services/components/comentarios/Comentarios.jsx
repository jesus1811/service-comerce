import { useContext } from "react";
import { DataContext } from "../../../../context/Provider";
import { Card, Description } from "../../../../styled-components";
import { Image } from "./Styled";

const Comentarios = ({ valoracion }) => {
  const { store } = useContext(DataContext);
  return (
    <Card dark={store.onDark}>
      <Image src={valoracion.urlFoto} alt="lorem" />
      <Description dark={store.onDark}>
        {valoracion.nombreCliente} {valoracion.apellidoCliente}
      </Description>
      <Description dark={store.onDark}>{valoracion.comentario}</Description>
    </Card>
  );
};

export default Comentarios;
