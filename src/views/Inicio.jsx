 import { useState } from "react";
import Peliculas from "../components/Peliculas";
import Registrar from "../components/Registrar"; 

function Inicio() {
  const [peliculas] = useState([
    {
      id: 1,
      titulo: "Bugonia",
      premio: "Oscar Mejor Película",
      apuestaMin: 2000,
      imagen: "https://www.filmofilia.com/wp-content/uploads/2025/10/Bugonia.webp"
    },
    {
      id: 2,
      titulo: "Frankenstein",
      premio: "Oscar Mejor Película",
      apuestaMin: 1000,
      imagen: "https://flyingfiddlesticks.com/wp-content/uploads/2025/11/frankenstein-movie-poster.jpg"
    },
    {
      id: 3,
      titulo: "Una batalla tras otra",
      premio: "Oscar Mejor Guion",
      apuestaMin: 1500,
      imagen: "https://www.mundiario.com/asset/thumbnail,1920,1080,center,center/media/cineseries/images/2026/01/04/2026010402353941565.png"
    },
    {
      id: 4,
      titulo: "Sueños de trenes",
      premio: "Oscar Mejor Película",
      apuestaMin: 3500,
      imagen: "https://www.utreradigital.com/web/wp-content/uploads/2025/12/Suenos-de-trenes.jpg"
    },
     {
      id: 5,
      titulo: "Pecadores",
      premio: "Oscar Mejor Película",
      apuestaMin: 2500,
      imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgalV1vu5X9QAEMtF_wuAzx49r939138-W3yjnYMveMf-Brzax7R03hiDLYvn_bw74xgcCfX0pV2CDuZHeuf6pyml4e6skTfwfemFkW36liMMKCa3lxRzJHj9TeNo32LPIK_oe7Ujz0j2TN0THFULJBNh13ObQ_KueSUoCXHZbC59OdBFQhnZR10hhigO_Z/s800/pcdrs24.jpg"
    }
  ]);


  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  
  const [usuarios, setUsuarios] = useState([]);

  
  const agregarUsuario = (nuevoUsuario) => {
    setUsuarios([...usuarios, nuevoUsuario]);
    setMostrarRegistro(false); 
  };

  return (
    <div style={{ marginBottom: "3rem" }}>
      <h2>Películas Nominadas</h2>
      <h2 type="I">Mejor Película</h2>
      <Peliculas peliculas={peliculas} />

      <button
        onClick={() => setMostrarRegistro(true)}
        style={{
          marginTop: "1rem",
          background: "#8aea29",
          border: "none",
          padding: "0.5rem 1rem",
          cursor: "pointer",
          color: "black"
        }}
      >
        Registrar
      </button>

     
      {mostrarRegistro && <Registrar onRegistrar={agregarUsuario} />}

      
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

export default Inicio;

