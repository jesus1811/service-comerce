import { useContext } from "react";
import { Input } from "../../../components/common";
import { ContainerPrimary, HeaderProfesional } from "../../../components/layouts";
import { DataContext } from "../../../context/Provider";
import useField from "../../../hooks/useField";
import styles from "./addService.module.scss";

const AddService = () => {
  const nombre = useField("text");
  const descripcion = useField("text");
  const precio = useField("text");
  const { store } = useContext(DataContext);
  return (
    <ContainerPrimary>
      <HeaderProfesional />
      <h1 className={store.onDark ? styles.titleDark : styles.title}>Agregar Servicio</h1>
      <article className={store.onDark ? styles.cardDark : styles.card}>
        <Input {...nombre} placeholder="Nombre" />
        <Input {...descripcion} placeholder="Descripcion" />
        <Input {...precio} placeholder="Precio" />
        <div className={store.onDark ? styles.containerFileDark : styles.containerFile}>
          <p className={styles.titleFile}>Agregar foto</p>
          <input type="file" onChange={() => {}} className={styles.file} />
        </div>
      </article>
    </ContainerPrimary>
  );
};

export default AddService;
