import styles from "./Search.module.css";
// Aqui hacemos uso de la libreria react-icons
import { RiSearchFill } from "react-icons/ri";
// Vamos a usar este hook para controlar el input y todo lo que se ingrese en el
// evitamos el uso de js clasico (document.get...).value etc)
// controlamos el valor que va a tener vacio y el valor que va a tener cada vez
// que cambie
import { useState } from "react";
// Hook para el cambio de ruta v5
//import { unstable_HistoryRouter as useHistory } from "react-router-dom";
// useSearchParams es un Hook que nos permite trabajar con la query string de la URL
// alternativa a la version vieja de react useHistory
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const Search = () => {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");
  useEffect(() => {
    setQuery({ search: search || "" });
  }, []);
  // const [searchText, setSearchText] = useState("");
  // Para hacer un cambio de ruta utilizando el input de abajo lo que tenemos que hacer
  // es utilizar un Hook llamado useHistory nos da un objeto history que nos permite
  // añadir un nuevo elemento a la ruta y redireccionarme
  // const history = useHistory();
  // Con esta funcion capturamos el evento al momento de dar click en el boton
  const handleSubmit = (evento) => {
    // Los formularios por defecto siempre hacen una peticion al servidor
    // razon por la que se refresca la pagina y con preventDefault estamos
    // cancelando lo que se hace por defecto en el formulario
    evento.preventDefault();
    // Lo que estamos diciendo es vete a la ruta que esta en los parametros
    // history.push(`/?search=${searchText}`);
  };
  return (
    // Siempre es bueno que utilizemos un formulario (<form></form>) cuando estemos usando
    // inputs y botones
    // Con onSubmit estamos diciendo que cuando se le de click al formulario
    // voy a ejecutar una funcion
    // Las acciones de un formulario se manejan en el onSubmit y el evento onClick es
    // para los botones que no estan dentro de un formulario
    <form className={styles.searchContenedor} onSubmit={handleSubmit}>
      <div className={styles.searchCaja}>
        {/* Por defecto en value (valor siempre va estar vacio)
        y para cambiar el valor vamos a almacenar lo que se digito en onChange */}
        {/* Lo que estamos diciendo en el onChange es cambiame en el momento en que digiten el estado de
        serchText por el digitado */}
        <input
          className={styles.searchInput}
          type="text"
          //   value={searchText}
          value={search ?? ""}
          autoFocus
          aria-label="Search Movies"
          placeholder="Buscar por titulo"
          // onChange={(event) => setSearchText(event.target.value)}
          onChange={(evento) => {
            const value = evento.target.value;

            setQuery({ search: value });
            //navigate("/?search=" + value);
          }}
        />
        {/* <button className={styles.searchBoton} type="submit">
          <RiSearchFill className={styles.searchIcono} size={20} />
        </button> */}
        <RiSearchFill
          className={styles.searchBoton}
          size={20}
        />
      </div>
    </form>
  );
};
