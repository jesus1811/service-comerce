import { useState, useContext } from "react";
import { ContainerPrimary, Header } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import { putPasswordCliente } from "../../services/cliente.service";
import { Title } from "../../styled-components";
import { Edit, List } from "./components";

const User = () => {
  const { store } = useContext(DataContext);
  const [password, setPassword] = useState("");
  const [onUserEdit, setOnUserEdit] = useState(false);
  const editPassword = () => {
    putPasswordCliente(parseInt(store.user[0].idCliente), password);
    setPassword("");
  };
  return (
    <ContainerPrimary>
      <Header />
      <Title>Perfil</Title>
      {onUserEdit ? null : <List onClick={() => alert("en mantimiento")} />}
    </ContainerPrimary>
  );
};

export default User;
