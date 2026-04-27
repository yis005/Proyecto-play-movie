import { useState } from "react";
import Registrar from "../components/Registrar"; 

function RegistroUsuario() {
  const [usuarios, setUsuarios] = useState([]);

  const agregarUsuario = (nuevoUsuario) => {
    setUsuarios([...usuarios, nuevoUsuario]);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Registro de Usuarios</h1>

   
      <Registrar onRegistrar={agregarUsuario} />

    

    </div>
  );
}

export default RegistroUsuario;

