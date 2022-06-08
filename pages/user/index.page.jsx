import { useState, useContext } from "react";
import { Container, Header } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import { putPasswordCliente } from "../../services/cliente.service";
import { Title } from "../../styled-components";
import { List } from "./components";

const User = () => {
  const { store } = useContext(DataContext);
  const [password, setPassword] = useState("");
  const [onUserEdit, setOnUserEdit] = useState(false);
  const editPassword = () => {
    putPasswordCliente(parseInt(store.user[0].idCliente), password);
    setPassword("");
  };
  return (
    <Container>
      <Header />
      <Title>Perfil</Title>
      {onUserEdit ? null : <List onClick={() => alert("en mantimiento")} />}
    </Container>
  );
};

export default User;
