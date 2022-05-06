import { Button } from "../../../../components/common";
import styles from "./servicio.module.scss";

const Servicio = ({ servicio }) => {
  return (
    <article className={styles.card}>
      <h1 className={styles.title}>{servicio.NombreServicio}</h1>
      <img src={servicio.foto} alt="" className={styles.images} />
      <p className={styles.precio}>S/. {servicio.precio}</p>
      <p className={styles.profesional}>{servicio.nombreProfesional + " " + servicio.apellidoProfesional}</p>
      <div className={styles.containerButtons}>
        <Button>Ver Servicio</Button>
      </div>
    </article>
  );
};

export default Servicio;
