import { useContext } from "react";
import { useRouter } from "next/router";
import { DataContext } from "../../../context/Provider";
import Link from "next/link";
import { LinkNav } from "./components";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { CheckBox, Container, Icon, Logout, Perfil } from "./Styled";
import { Navigation } from "../../../styled-components";
const Header = () => {
  const router = useRouter();
  const { store, setStore } = useContext(DataContext);
  return (
    <Container>
      <CheckBox type="checkbox" id="check" />
      <Link href="/menu-home">
        <a smooth={true}>
          {store.onDark ? <Icon src="/homeDark.svg" alt="montalvo" /> : <Icon src="/home.svg" alt="montalvo" />}
        </a>
      </Link>
      <DarkModeSwitch
        sunColor="#272e3a"
        size={35}
        checked={store?.onDark}
        onChange={() => {
          setStore({ ...store, onDark: !store.onDark });
          localStorage.setItem("store", JSON.stringify({ ...store, onDark: !store.onDark }));
        }}
      />
      <label htmlFor="check">
        {store?.onDark ? <Icon src="/menuDark.svg" alt="menu" /> : <Icon src="/menu.svg" alt="menu" />}
      </label>
      <Navigation id="navigation">
        <LinkNav path="/user">
          <Perfil src={store?.user[0]?.urlFoto} alt="usuario" />
        </LinkNav>
        <LinkNav path="/historial">Historial de Compras</LinkNav>
        <LinkNav path="/profesionales">Provedores</LinkNav>
        <Logout
          onClick={() => {
            setStore({ ...store, user: [] });
            localStorage.setItem("store", JSON.stringify({ ...store, user: [] }));
            router.push("/");
          }}
        >
          Cerrar Sesión
        </Logout>
      </Navigation>
    </Container>
  );
};
export default Header;
