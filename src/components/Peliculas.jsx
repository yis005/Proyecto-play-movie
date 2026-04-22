import { useState } from "react";
import Peliculas from "../components/Peliculas";

export default function Inicio() {
  const [peliculasData] = useState([
    { id: 1, titulo: "Oppenheimer", premio: "Oscar Mejor Película", apuestaMin: 2000, imagen: "..." },
    { id: 2, titulo: "Poor Things", premio: "Cannes Mejor Dirección", apuestaMin: 1000, imagen: "..." },
    { id: 3, titulo: "The Zone of Interest", premio: "Oscar Mejor Guion", apuestaMin: 1500, imagen: "..." }
  ]);

  return (
    <div>
      <h2>Películas Nominadas</h2>
      <Peliculas peliculas={peliculasData} />
    </div>
  );
}
