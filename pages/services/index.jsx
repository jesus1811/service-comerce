import React from "react";
import { Button, ContainerPrimary } from "../../components/common";
import { Header } from "../../components/layouts";
import styles from "./services.module.scss";

const Services = () => {
  return (
    <ContainerPrimary>
      <Header />
      <h1 className={styles.titleMain}>Servicios Terapeuticos</h1>
      <div className={styles.containerCard}>
      <article className={styles.card}>
          <h1 className={styles.titleCard}>terapia prueba1</h1>
          <img src="/time.jpg" alt="" className={styles.imagesCard} />
          <p className={styles.precioCard}> s/ 45.5</p>
          <p className={styles.profesionalCard}>
           jadhira Rodriguez
          </p>
          <div className={styles.containerButtons}>
            <Button>Pedir Servicio</Button>
          </div>
        </article>
        <article className={styles.card}>
          <h1 className={styles.titleCard}>terapia prueba1</h1>
          <img src="/time.jpg" alt="" className={styles.imagesCard} />
          <p className={styles.precioCard}> s/ 45.5</p>
          <p className={styles.profesionalCard}>
           jadhira Rodriguez
          </p>
          <div className={styles.containerButtons}>
            <Button>Pedir Servicio</Button>
          </div>
        </article>
        <article className={styles.card}>
          <h1 className={styles.titleCard}>terapia prueba1</h1>
          <img src="/time.jpg" alt="" className={styles.imagesCard} />
          <p className={styles.precioCard}> s/ 45.5</p>
          <p className={styles.profesionalCard}>
           jadhira Rodriguez
          </p>
          <div className={styles.containerButtons}>
            <Button>Pedir Servicio</Button>
          </div>
        </article>
        <article className={styles.card}>
          <h1 className={styles.titleCard}>terapia prueba1</h1>
          <img src="/time.jpg" alt="" className={styles.imagesCard} />
          <p className={styles.precioCard}> s/ 45.5</p>
          <p className={styles.profesionalCard}>
           jadhira Rodriguez
          </p>
          <div className={styles.containerButtons}>
            <Button>Pedir Servicio</Button>
          </div>
        </article>
        <article className={styles.card}>
          <h1 className={styles.titleCard}>terapia prueba1</h1>
          <img src="/time.jpg" alt="" className={styles.imagesCard} />
          <p className={styles.precioCard}> s/ 45.5</p>
          <p className={styles.profesionalCard}>
           jadhira Rodriguez
          </p>
          <div className={styles.containerButtons}>
            <Button>Pedir Servicio</Button>
          </div>
        </article>
      </div>
    </ContainerPrimary>
  );
};

export default Services;
