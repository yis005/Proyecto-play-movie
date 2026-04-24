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

      {/* Formulario de registro */}
      <Registrar onRegistrar={agregarUsuario} />

    
      <h2>Usuarios Registrados</h2>
      {usuarios.length === 0 ? (
        <p>No hay usuarios registrados todavía.</p>
      ) : (
        <ul>
          {usuarios.map((u) => (
            <li key={u.id}>
              <strong>{u.nombre}</strong> — {u.correo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RegistroUsuario;

