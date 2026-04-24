import supersaludLogo from "../assets/supersalud.png";
import coljuegoslogo from "../assets/coljuegos.jpg"

function Footer() {
  return (
<footer style={{ background: "#000", padding: "1rem", textAlign: "center", color: "#fff" }}>
  <p>© 2026 Plataforma de Apuestas de Películas</p>
  
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem" }}>
    <a 
      href="https://www.supersalud.gov.co" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img src={supersaludLogo} alt="Supersalud" style={{ width: "150px" }} />
    </a>

    <a 
      href="https://www.coljuegos.gov.co" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img src={coljuegoslogo} alt="Coljuegos" style={{ width: "150px" }} />
    </a>
  </div>
</footer>
  )
}
export default Footer;