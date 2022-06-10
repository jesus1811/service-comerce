import { useContext } from "react";
import { DataContext } from "../../../../context/Provider";
import { Description } from "../../../../styled-components";
import { Image, CardRow } from "./Styled";

const Clientes = ({ cliente }) => {
  const { store } = useContext(DataContext);
  return (
    <CardRow center dark={store.onDark}>
      <Image src={cliente.urlFoto} alt="" />
      <Description dark={store.onDark}>
        {cliente.nombreCliente} {cliente.apellidoCliente}
      </Description>
    </CardRow>
  );
};

export default Clientes;
