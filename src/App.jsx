
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./views/Inicio";
import Usuarios from "./views/Usuarios";

function App() {
  return (
    <div>
      <Navbar/>
      <Inicio />
      <Usuarios />
      <Footer/>
    </div>
  );
}

export default App;
