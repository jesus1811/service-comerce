import { Card, Description } from "../../../../styled-components";
import { Image } from "./Styled";

const Comentarios = ({ valoracion }) => {
  return (
    <Card>
      <Image src={valoracion.urlFoto} alt="lorem" />
      <Description>
        {valoracion.nombreCliente} {valoracion.apellidoCliente}
      </Description>
      <Description>{valoracion.comentario}</Description>
    </Card>
  );
};

export default Comentarios;
