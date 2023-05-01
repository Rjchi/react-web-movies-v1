import styles from "./MovieDetalles.module.css";
import { get } from "../utils/httpClient.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../Spinner";
import MoviePlayer from "../components/MoviePlayer";

//Siempre va el nombre del componente
export const MovieDetalles = () => {
  const { movieId } = useParams();
  // Esto es para hacer el loger (circulo que demuestra al usuario que esta
  // cargando las peliculas)
  const [estaCargando, setEstaCargando] = useState(true);
  const [movie, setMovie] = useState(null);
  // Hacemos una llamada asincrona para que nos cargue los detalles de la pelicula en
  // especifico
  // useEffect para los efectos secundarios (este efecto se encarga de traer las
  // peliculas del servidor)
  useEffect(() => {
    // Se esta cargando...
    setEstaCargando(true);
    get("/movie/ " + movieId).then((data) => {
      // Se termino de cargar. (cambiamos el estado nuevamente)
      setMovie(data);
      setEstaCargando(false);
    });
    //Aqui dice que si cambia el movieId se debe ejecutar nuevamente el efecto
    //de lo contrario que no se ejecute mas de una vez
  }, [movieId]);

  // Si esto es igual true entocen muestra cargando... en la pantalla
  if (estaCargando) {
    return <Spinner />;
  }

  if (!movie) {
    return null;
  }

  const imageUrl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
    : "https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png";
  return (
    <div className={styles.detallesContenedor}>
      <img
        className={`${styles.col} ${styles.movieImagen}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.detalles}`}>
        <p className={styles.primerItem}>
          <b>Titulo:</b> {movie.title}
        </p>
        <p>
          {/* Entramos en el array de generos lo recorremos y tomamos solo el nombre 
            tambien le ponemos como separador una coma y un espacio*/}
          <b>Generos:</b> {movie.genres.map((genero) => genero.name).join(", ")}
        </p>
        <p>
          <b>Descripcion:</b> {movie.overview}
        </p>
        <>
          <MoviePlayer id={movieId}/>
        </>
      </div>
    </div>
  );
};
