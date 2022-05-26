import { useState, useContext } from "react";
import { Button, Input } from "../../components/common";
import styles from "./register.module.scss";
import { useRouter } from "next/router";
import { postClienteServices } from "../../services/cliente";
import { app } from "../../services/firebase";
import { ContainerPrimary } from "../../components/layouts";
import { DataContext } from "../../context/Provider";

const Register = () => {
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [celular, setCelular] = useState("");
  const [archivo, setArchivo] = useState({});
  const { store } = useContext(DataContext);
  const router = useRouter();
  const clearInputs = () => {
    setNombre("");
    setApellido("");
    setDni("");
    setCelular("");
    setCorreo("");
    setPassword("");
  };
  const handleGuardarCliente = async () => {
    const path = app.storage().ref().child(archivo.name);
    await path.put(archivo);

    postClienteServices(dni, nombre, apellido, correo, password, celular, archivo.name, router);

    clearInputs();
  };

  return (
    <ContainerPrimary>
      <div className={styles.containerPrimary}>
        <h1 className={styles.titleBlue}>Bienvenido a Montalvo </h1>
        <img className={styles.image} src="./login.png" alt="" />
        <p className={styles.description}>¿ Ya tienes una cuenta ?</p>
        <Button onClick={() => router.push("/")}>Ir al login</Button>
      </div>
      <div className={store.onDark ? styles.containerDark : styles.containerSecundary}>
        <h1 className={styles.title}>Registrate aqui</h1>
        <div className={styles.containerInputs}>
          <Input placeholder="DNI" type="number" onChange={(e) => setDni(e.target.value.slice(0, 8))} value={dni} />
          <Input placeholder="Nombre" type="text" onChange={(e) => setNombre(e.target.value)} value={nombre} />
          <Input placeholder="Apellido" type="text" onChange={(e) => setApellido(e.target.value)} value={apellido} />
          <Input
            placeholder="Celular"
            type="number"
            onChange={(e) => setCelular(e.target.value.slice(0, 9))}
            value={celular}
          />
          <Input
            placeholder="Correo Electronico"
            type="email"
            onChange={(e) => setCorreo(e.target.value)}
            value={correo}
          />
          <Input
            placeholder="Contraseña"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
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

          <div className={styles.containerButton}>
            <Button onClick={handleGuardarCliente}>Crear</Button>
          </div>
        </div>
      </div>
    </ContainerPrimary>
  );
};

export default Register;
