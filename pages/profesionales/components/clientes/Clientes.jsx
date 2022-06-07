import React from "react";
import { Description } from "../../../../styled-components";
import { Image, CardRow } from "./styled";

const Clientes = ({ cliente }) => {
  return (
    <CardRow center>
      <Image src={cliente.urlFoto} alt="" />
      <Description>
        {cliente.nombreCliente} {cliente.apellidoCliente}
      </Description>
    </CardRow>
  );
};

export default Clientes;
