import { useState } from "react";

function Registrar({ onRegistrar }) {
  const [nuevoUsuario, setNuevoUsuario] = useState({
    id: "",
    nombre: "",
    correo: "",
    contraseña: ""
  });

  // Maneja cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoUsuario({ ...nuevoUsuario, [name]: value });
  };

  // Envía el usuario al padre
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegistrar(nuevoUsuario); 
    setNuevoUsuario({ id: "", nombre: "", correo: "", contraseña: "" }); // limpia el formulario
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        maxWidth: "400px"
      }}
    >
      <label>Identificación:</label>
      <input
        type="text"
        name="id"
        value={nuevoUsuario.id}
        onChange={handleChange}
        required
      />

      <label>Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={nuevoUsuario.nombre}
        onChange={handleChange}
        required
      />

      <label>Correo:</label>
      <input
        type="email"
        name="correo"
        value={nuevoUsuario.correo}
        onChange={handleChange}
        required
      />

      <label>Contraseña:</label>
      <input
        type="password"
        name="contraseña"
        value={nuevoUsuario.contraseña}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        style={{
          marginTop: "1rem",
          background: "#90ed2c",
          border: "none",
          padding: "0.5rem 1rem",
          cursor: "pointer"
        }}
      >
        Registrarse
      </button>
    </form>
  );
}

export default Registrar;

