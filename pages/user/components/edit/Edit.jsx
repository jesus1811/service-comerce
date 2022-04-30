import React from "react";
import { Button, Input } from "../../../../components/common";
import styles from "./edit.module.scss";

const Edit = ({ password, onChange, onClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Editar Contraseña</h1>

      <div className={styles.card}>
        <Input
          type="password"
          placeholder="Contraseña Nueva"
          onChange={onChange}
          value={password}
        />
        <Button onClick={onClick}>Confirmar</Button>
      </div>
    </div>
  );
};

export default Edit;
