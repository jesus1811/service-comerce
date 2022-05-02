import { useState } from "react";
import { useContext } from "react";
import { ContainerPrimary } from "../../components/common";
import { Header } from "../../components/layouts";
import { DataContext } from "../../context/Provider";
import { putPasswordCliente } from "../../services/cliente";
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
      {onUserEdit ? (
        <Edit onClick={editPassword} onChange={(e) => setPassword(e.target.value)} password={password} />
      ) : (
        <List onClick={() => setOnUserEdit(true)} />
      )}
    </ContainerPrimary>
  );
};

export default User;
