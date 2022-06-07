import { useContext } from "react";
import { useRouter } from "next/router";
import { DataContext } from "../../../context/Provider";
import Link from "next/link";
import { LinkNav } from "./components";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { CheckBox, Container, Icon, Logout, Perfil } from "./styled";
import { Navigation } from "../../../styled-components";
const Header = () => {
  const router = useRouter();
  const { store, setStore } = useContext(DataContext);
  return (
    <Container>
      <CheckBox type="checkbox" id="check" />
      <Link href="/menu-home-profesional">
        <a>{store.onDark ? <Icon src="/homeDark.svg" alt="montalvo" /> : <Icon src="/home.svg" alt="montalvo" />}</a>
      </Link>
      <DarkModeSwitch
        sunColor="#343d4c"
        size={35}
        checked={store?.onDark}
        onChange={() => {
          setStore({ ...store, onDark: !store.onDark });
          localStorage.setItem("store", JSON.stringify({ ...store, onDark: !store.onDark }));
        }}
      />
      <Link href="/agregar-servicio">
        <a>
          {store.onDark ? <Icon src="/agregarDark.svg" alt="montalvo" /> : <Icon src="/agregar.svg" alt="montalvo" />}
        </a>
      </Link>
      <label htmlFor="check">
        {store?.onDark ? <Icon src="/menuDark.svg" alt="" /> : <Icon src="/menu.svg" alt="" />}
      </label>
      <Navigation id="navigation">
        <LinkNav path="#">
          <Perfil src={store?.userProfesional[0]?.urlFoto} alt="" />
        </LinkNav>
        <LinkNav path="#">Mis Servicios</LinkNav>
        <Logout
          onClick={() => {
            setStore({ ...store, userProfesional: [] });
            localStorage.setItem("store", JSON.stringify({ ...store, userProfesional: [] }));
            router.push("/profesional");
          }}
        >
          Cerrar Sesión
        </Logout>
      </Navigation>
    </Container>
  );
};
export default Header;
