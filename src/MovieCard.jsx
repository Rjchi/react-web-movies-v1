// Link es un componente de react-roter-dom que crea un enlace (<a></a>)
// que lo que hace es que cuando le den click no refresque el navegador
// como las web antiguas
import { Link } from "react-router-dom";
//Se puede poner cualquier nombre en este caso uso styles
import styles from "./MovieCard.module.css";

export const MovieCard = ({ movie }) => {
  //Esta url concatena el resto de la url del documento json y busca la imagen en internet
  // Si tenemos un poster_path de la api entonces concatenela y muestrela
  // y si no entonces muestre un placeholder vacio
  const imageUrl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
    : "https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png";
  return (
    // Styles es un objeto y movieCard es una clave que en este caso es el nombre de una clase
    // La clase que se crea en el dom, es unica para el componente que la esta utilizando
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        {/* Buena practica poner el alto y el ancho de la imagen para que no halla problemas
                esteticos al cargar la pagina  */}
        <img
          width={210}
          height={300}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
};
