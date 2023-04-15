// Usamos un hook de react
// Esto se va a ejecutar como un efecto secundario
//El componente se carga primero y luego el efecto secundario
//El useState tambien es un hook que es para devolver un array con el listado
// del elemento que se paso
import { useEffect, useState } from "react";

//Importamos el json con las peliculas (Simulando una respuesta real de un servidor)
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import { get } from "./utils/httpClient";
// Con esta libreria de npm podemos hacer un scroll infinito solamente utilizando un
// componente npm install react-infinite-scroll-component
import InfiniteScroll from "react-infinite-scroll-component";
// componente para cuando no hay resultados en la busqueda
import { Empty } from "./Empty.jsx";

// Para nosotros crearnos un Hook lo unico que tenemos que hacer es poner use delante del
// nombre (useNombre) y ya dentro de el podemos utilizar los hook que queramos
// const useQuery = () => {
// const { search } = useLocation();
// return React.useMemo(() => new URLSearchParams(search), [search]);
//   return new URLSearchParams(useLocation().search);
// };

// Recorremos el array (movies) y lo pasamos a elemento <li></li> JSX
// Siempre se le debe poner una clave a todos los elementos li KEY (atributo que sea unico)
// Le decimos que el atributo KEY se va a generar dinamicamente a traves del id  que en este caso esta en el JSON
export const MoviesGrid = ({search}) => {
  // El estado inicial siempre va a ser la pagina 1
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  // const location = useLocation();
  // Con query renemos acceso a todo el parametro de ruta
  // const query = useQuery();
   // y como lo que nos intereza es el valor del search lo obtenemos de esta manera
  // const search = query.get("search");
  const [estaCargando, setEstaCargando] = useState(true);
  // en movies esta el estado y para modificar el estado se debe utilizar la funcion que devuelve el hook
  // setMovies
  // desestructuracion de arreglos para sacar la posision cero y la posicion uno asi
  const [movies, setMovies] = useState([]);
  // o asi:
  // const moviesState = useState([]);
  // const [movies, setMovies] = moviesState;

  //esto es para hacer una llamada asincrona
  //las llamadas asincronas no se deben poner directamente en la funcion porque daria error
  useEffect(() => {
    setEstaCargando(true);
    // url de la api para la llamada asincrona
    //Este fetch es tambien llamado promesa (una consulta asincrona) y el resultado
    //se obtiene con .then
    //Fetch se utiliza para no depender de librerias externas
    // fetch("https://api.themoviedb.org/3/discover/movie", {
    //   headers: {
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGQ1OTU3NzI5YTViMzJlZjE5MmU3MTAyMmM1M2ZkMSIsInN1YiI6IjYzYzk5ZGFjMDM5OGFiMDA3Y2Y5Yjk2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lsJv4tss_4TQrUVOGL4yepfI2PYnuocy6XF0d6lQ80M",
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    // retornamos el resultado que es una promesa que es el parseo del resultado a JSON
    // })
    //   .then((resultado) => resultado.json())
    // Url para que busque la pelicula teniendo en cuenta el parametro que se ingresa
    // y haciendo uso del operador ternario en js (similar el if (? (asignale)) else (:(asignale...)))
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      //Aqui se asigna el resultado de la consulta al servidor
      //Y aqui estamos cambiando el estado (el componente se va a volver a ejecutar
      //siempre que se cambie el estado)
      // setMovies(data.results);
      // Retorno las peliculas y concateno las peliculas que vienen nuevas gracias al InfiniteScroll
      setMovies(prevMovies => prevMovies.concat(data.results));
      // Data tiene toda la informacion de las peliculas (del arregle de objetos)
      // Cuando se acaban las paginas el hasMore va a estar en falso haciendo que el spiner deje de cargar
      setHasMore(data.page < data.total_pages)
      setEstaCargando(false);
    });
    //El arreglo de dependencias siempre se debe poner para evitar ciclos infinitos
    //Con este arreglo se esta diciendo que este efecto se ejecute una sola vez cuando se cargue el componente
    // y nunca mas se vuelva a ejecutar
    //}, []);
    // en caso de que se quiera cargar el efecto mas de una vez
    // en el arreglo de dependencias sele debe poner lo que queremos
    // ejem: Aqui le decimos que si el parametro search cambia entonces mandame el efecto nuevamente
  }, [search, page]);

  if (!estaCargando && movies.length === 0) {
    return <Empty />
  }

  // Retorna el componente spinner solo cuando el estado de estaCargando sea true
  // if (estaCargando) {
  //   return <Spinner />;
  // }
  //Los efectos se ejecutan una vez que el componente este cargado en el dom
  return (
    // Utilizamos el infiniti scroll
    // Parametros 1(peliculas) 2(cuando llegamos a la ultima pagina hasmore debe ser false)
    // 3(le suma una pagina al resultado anterior por medio de una funcion)
    // 4(le pasamos el spinner que creamos anteriormente)
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      // Siempre que se quiera actualizar el estado de algo se debe hacer uso de una funcion
      // para evitar errores
      // al pasar una funcion el primer elemento (paginAnterior) va ha ser el estado anterior
      // y apartir de ahi se calcula el siguiente estado
      next={() => setPage(paginAnterior => paginAnterior + 1)}
      loader={<Spinner/>}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};
