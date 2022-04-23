import { useContext } from "react";
import { ContainerPrimary } from "../../components/common";
import { Header } from "../../components/layouts";
import { DataContext } from "../../context/Provider";

const User = () => {
  const { store } = useContext(DataContext);
  return (
    <ContainerPrimary>
      <Header />
      <h1>Perfil</h1>
      {store.user.map((n, index) => {
        return (
          <div key={index}>
            <h1>{store.user[0].DNI}</h1>
            <h1>{store.user[0].nombreCliente}</h1>
            <h1>{store.user[0].apellidoCliente}</h1>
            <h1>{store.user[0].correoCliente}</h1>
            <img src={store.user[0].urlFoto} alt="" width={100} height={100} />
          </div>
        );
      })}
    </ContainerPrimary>
  );
};

export default User;
