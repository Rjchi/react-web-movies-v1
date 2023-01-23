import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";
import { MoviesGrid } from "../MoviesGrid";
import { Search } from "../Search";

// Este seria el componente Padre de los componente que usa
export const PaginaEntrada = () => {
  const query = useQuery();
  const search = query.get("search");
  // Se le pasan como parametros la consulta y la cantidad de milisegundos que yo quiero esperar
  // para que el valor se actulice
  const debouncedSearch = useDebounce(search, 400);
  // Lo que hace la key es que en el momento en que la busqueda cambie
  // el componente se va a cargar de nuevo resetiando(borrando) los valores (las peliculas) que
  // tenia el componente MuviesGrid y dejando los estado como los teniamos al inicio
  return (
    <div>
      <Search />
      {/* En este caso usamos las props para pasar el search al componente MoviesGrid */}
      {/* <MoviesGrid key={search} search={search} /> */}
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
};
