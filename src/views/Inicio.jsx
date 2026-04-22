import { useState } from "react";
import Peliculas from "../components/Peliculas";

export default function Inicio() {
  const [Pelis] = useState([
    {
      id: 1,
      titulo: "Oppenheimer",
      premio: "Oscar Mejor Película",
      apuestaMin: 2000,
      imagen: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%282023%29.jpg"
    },
    {
      id: 2,
      titulo: "Poor Things",
      premio: "Cannes Mejor Dirección",
      apuestaMin: 1000,
      imagen: "https://upload.wikimedia.org/wikipedia/en/7/7d/Poor_Things_poster.jpg"
    },
    {
      id: 3,
      titulo: "The Zone of Interest",
      premio: "Oscar Mejor Guion",
      apuestaMin: 1500,
      imagen: "https://upload.wikimedia.org/wikipedia/en/2/2b/The_Zone_of_Interest_poster.jpg"
    }
  ]);

  return (
    <div>
      <h2>Películas Nominadas</h2>
      <Peliculas Pelis={Pelis} />
    </div>
  );
}
