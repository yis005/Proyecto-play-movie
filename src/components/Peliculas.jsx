
function Peliculas({ peliculas }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {peliculas.map((peli) => (
        <div
          key={peli.id}
          style={{
            border: "1px solid #90ed2c",
            borderRadius: "8px",
            padding: "1rem",
            background: "black",
            color: "white",
            width: "200px",
            textAlign: "center"
          }}
        >
          <img
            src={peli.imagen}
            alt={peli.titulo}
            style={{ width: "100%", borderRadius: "4px" }}
          />
          <h3>{peli.titulo}</h3>
          <p>{peli.premio}</p>
          <p>Apuesta mínima: ${peli.apuestaMin}</p>
        </div>
      ))}
    </div>
  );
}

export default Peliculas;
