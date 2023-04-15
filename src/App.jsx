import styles from "./App.module.css";
// Utilizamos react router
// con as sele coloca un alias a BrowserRouter
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetalles } from "./pages/MovieDetalles";
import { PaginaEntrada } from "./pages/PaginaEntrada";

// Export para utilizar este modulo desde el index
export const App = () => {
  return (
    // Router siempre debe ir cuando usamos react-router
    // nuestro arbol de dependencias siempre lo debe tener
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Peliculas</h1>
        </Link>
      </header>
      <main>
        {/* Rutes es el remplazo de la version 6 para Switch (Funciona como un switch de rutas) */}
        <Routes>
          {/* Exact es para que las rutas sean exactas y no arroje varios resultados al
            mismo tiempo */}
          {/* :movieId es el nombre del parametro que contiene el  id de la pelicula */}
          <Route exact path="/movies/:movieId" element={<MovieDetalles />} />
          {/* Aqui lo que se dice es que si una ruta coincide con el path
          entonces cargame PaginaEntrada */}
          <Route path="/" element={<PaginaEntrada />} />
        </Routes>
      </main>
    </Router>
  );
};
