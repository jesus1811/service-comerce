import { useContext, useState, useEffect } from "react";
import { Button, Input } from "../../../components/common";
import { ContainerPrimary, HeaderProfesional } from "../../../components/layouts";
import { DataContext } from "../../../context/Provider";
import useField from "../../../hooks/useField";
import { getServicioIdServices, putServiceServices } from "../../../services/servicio.service";
import styles from "./updateService.module.scss";

const UpdateService = () => {
  const nombre = useField("text");
  const descripcion = useField("text");
  const precio = useField("number");
  const descuento = useField("number");
  const { store } = useContext(DataContext);
  const handleClickPutService = () => {
    const { idServicio } = JSON.parse(localStorage.getItem("servicio"));
    putServiceServices(idServicio, nombre.value, descripcion.value, precio.value, descuento.value);
  };
  useEffect(() => {
    const servicio = JSON.parse(localStorage.getItem("servicio"));
    nombre.setValue(servicio.NombreServicio);
    descripcion.setValue(servicio.descripcion);
    precio.setValue(servicio.precio);
    descuento.setValue(servicio.descuento);
  }, []);
  return (
    <ContainerPrimary>
      <HeaderProfesional />
      <h1 className={store.onDark ? styles.titleDark : styles.title}>Editar Servicio</h1>
      <article className={store.onDark ? styles.cardDark : styles.card}>
        <Input {...nombre} placeholder="Nombre" value={nombre.value} />
        <Input {...descripcion} placeholder="Descripcion" />
        <Input {...precio} placeholder="Precio S/." />
        <Input {...descuento} placeholder="descuento %" />
        <Button onClick={handleClickPutService}>Editar Servicio</Button>
        {/* <div className={store.onDark ? styles.containerFileDark : styles.containerFile}>
          <p className={styles.titleFile}>Agregar foto</p>
          <input type="file" onChange={() => {}} className={styles.file} />
        </div> */}
      </article>
    </ContainerPrimary>
  );
};

export default UpdateService;
