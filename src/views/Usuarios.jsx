import { useState } from "react";

function UsuarioCard({ usuario }) {
  return (
    <div style={{ background: "black", color: "white", border: "1px solid #90ed2c", margin: "0.5rem", padding: "0.5rem" }}>
      <h4>{usuario.nombre}</h4>
      <p>Saldo: ${usuario.saldo}</p>
    </div>
  );
}

export default function Usuarios() {
  const [usuarios] = useState([
    { id: 1, nombre: "Rudxedy", saldo: 25000 },
    { id: 2, nombre: "Santiago", saldo: 30000 },
    { id: 3, nombre: "Fernanda", saldo: 7000 },
    { id: 4, nombre: "Edison", saldo: 20000 },
    { id: 5, nombre: "Andrea", saldo: 1000 },
  ]);

  return (
    <div>
      <h2>Usuarios Registrados</h2>
      {usuarios.map((a) => (
        <UsuarioCard key={a.id} usuario={a} />
      ))}
    </div>
  );
}
