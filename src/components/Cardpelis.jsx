function Cardpelis({ pelicula }) {
  return (
    <div style={{ border: "1px solid #94eb13", padding: "1rem", margin: "1rem", width: "200px" }}>
      <img src={pelicula.imagen} alt={pelicula.titulo} style={{ width: "100%" }} />
      <h3>{pelicula.titulo}</h3>
      <p>Premio: {pelicula.premio}</p>
      <p>Apuesta mínima: ${pelicula.apuesta}</p>
    </div>
  );
}

export default Cardpelis;