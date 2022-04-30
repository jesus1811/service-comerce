import Link from "next/link";
import styles from "./linkNav.module.scss";

const LinkNav = ({ children, path }) => {
  return (
    <Link href={path}>
      <a className={styles.link + " links__a"} smooth={true}>
        {children}
      </a>
    </Link>
  );
};

export default LinkNav;
