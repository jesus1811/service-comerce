import { useContext } from "react";
import { useRouter } from "next/router";
import { DataContext } from "../../../context/Provider";
import Link from "next/link";
import styles from "./header.module.scss";
import { LinkNav } from "./components";
const Header = () => {
  const router = useRouter();
  const { store, setStore } = useContext(DataContext);
  return (
    <section className={styles.container}>
      <div className={styles.containerDiv}>
        <input type="checkbox" id="check" className={styles.checkedNav} />
        <Link href="/menu-home">
          <a className={styles.link} smooth={true}>
            <img src="Logo.svg" alt="montalvo" className={styles.logo} />
          </a>
        </Link>
        <label htmlFor="check" className="btnCheck">
          <img src="menu.svg" alt="" className={styles.image} />
        </label>
        <nav className={styles.navigation + " "}>
          <button
            className={styles.logout}
            onClick={() => {
              setStore({ ...store, user: [] });
              localStorage.setItem("store", JSON.stringify({ ...store, user: [] }));
              router.push("/");
            }}
          >
            Cerrar Sesión
          </button>

          <LinkNav path="/user">{store.user[0]?.nombreCliente + " " + store.user[0]?.apellidoCliente}</LinkNav>
          <img src={store.user[0]?.urlFoto} alt="" className={styles.perfil} />
        </nav>
      </div>
    </section>
  );
};
export default Header;
