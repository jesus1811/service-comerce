import styles from "./servicioProfesional.module.scss";

const ServicioProfesional = ({ servicioProfesional }) => {
  return (
    <>
      <article className={styles.card}>
        <img src={servicioProfesional.foto} alt="" className={styles.images} />
        <div className={styles.containerPrecio}>
          <h1 className={styles.title}>{servicioProfesional.NombreServicio}</h1>
          <p className={styles.precio}>S/.{servicioProfesional.precio}</p>
        </div>

        <div className={styles.containerButtons}></div>
      </article>
    </>
  );
};

export default ServicioProfesional;
