import { useContext } from "react";
import { useRouter } from "next/router";
import { DataContext } from "../../../context/Provider";
import Link from "next/link";
import styles from "./header.module.scss";
import { LinkNav } from "./components";
import { DarkModeSwitch } from "react-toggle-dark-mode";
const Header = () => {
  const router = useRouter();
  const { store, setStore } = useContext(DataContext);
  return (
    <section className={store?.onDark ? styles.containerDark : styles.container}>
      <div className={styles.containerDiv}>
        <input type="checkbox" id="check" className={styles.checkedNav} />
        <Link href="/profesional/menu-home">
          <a className={styles.link} smooth={true}>
            {store.onDark ? (
              <img src="/homeDark.svg" alt="montalvo" className={styles.logo} />
            ) : (
              <img src="/home.svg" alt="montalvo" className={styles.logo} />
            )}
          </a>
        </Link>
        <DarkModeSwitch
          sunColor="#0B3B47"
          size={35}
          checked={store?.onDark}
          onChange={() => {
            setStore({ ...store, onDark: !store.onDark });
            localStorage.setItem("store", JSON.stringify({ ...store, onDark: !store.onDark }));
          }}
        />
        <label htmlFor="check" className="btnCheck">
          {store?.onDark ? (
            <img src="/menuDark.svg" alt="" className={styles.image} />
          ) : (
            <img src="/menu.svg" alt="" className={styles.image} />
          )}
        </label>
        <nav className={store?.onDark ? styles.navigationDark : styles.navigation}>
          <LinkNav path="#">
            <img src={store?.userProfesional[0]?.urlFoto} alt="" className={styles.perfil} />
          </LinkNav>
          <LinkNav path="#">Mis Cursos</LinkNav>
          <button
            className={styles.logout}
            onClick={() => {
              setStore({ ...store, userProfesional: [] });
              localStorage.setItem("store", JSON.stringify({ ...store, userProfesional: [] }));
              router.push("/profesional");
            }}
          >
            Cerrar Sesión
          </button>
        </nav>
      </div>
    </section>
  );
};
export default Header;
