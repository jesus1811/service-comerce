import { useContext, useState, useEffect } from "react";
import { Button, Input } from "../../../components/common";
import { ContainerPrimary, HeaderProfesional } from "../../../components/layouts";
import { DataContext } from "../../../context/Provider";
import useField from "../../../hooks/useField";
import { app } from "../../../services/firebase.service";
import { postServicioServcices } from "../../../services/servicio.service";
import { getTipoServices } from "../../../services/tipoServicio.service";
import styles from "./addService.module.scss";

const AddService = () => {
  const nombre = useField("text");
  const descripcion = useField("text");
  const precio = useField("number");
  const [loader, setLoader] = useState(true);
  const [tipo, setTipo] = useState(true);
  const [archivo, setArchivo] = useState({});
  const [tiposServicios, setTiposServicios] = useState([]);
  const { store } = useContext(DataContext);
  const handleClickAddService = async () => {
    const path = app.storage().ref().child(archivo.name);
    await path.put(archivo);
    postServicioServcices(
      nombre.value,
      descripcion.value,
      tipo,
      precio.value,
      store.userProfesional[0].idProfesional,
      archivo.name
    );
  };
  useEffect(() => {
    getTipoServices(setTiposServicios, setLoader);
  }, []);
  return (
    <ContainerPrimary>
      <HeaderProfesional />
      <h1 className={store.onDark ? styles.titleDark : styles.title}>Agregar Servicio</h1>
      <article className={store.onDark ? styles.cardDark : styles.card}>
        <Input {...nombre} placeholder="Nombre" />
        <Input {...descripcion} placeholder="Descripcion" />
        <select className={styles.select} onChange={(e) => setTipo(e.target.value)} defaultValue={null}>
          <option selected disabled>
            Tipo de Servicio
          </option>
          {tiposServicios.map((tipoServicio, index) => {
            return (
              <option key={index} value={tipoServicio.idTipoServicio}>
                {tipoServicio.nombreTipoServicio}
              </option>
            );
          })}
        </select>
        <Input {...precio} placeholder="S/. Precio" />
        <div className={store.onDark ? styles.containerFileDark : styles.containerFile}>
          <p className={styles.titleFile}>Agregar foto</p>
          <input
            type="file"
            onChange={(e) => {
              setArchivo(e.target.files[0]);
            }}
            className={styles.file}
          />
        </div>
        <Button onClick={handleClickAddService}>Agregar Servicio</Button>
      </article>
    </ContainerPrimary>
  );
};

export default AddService;
