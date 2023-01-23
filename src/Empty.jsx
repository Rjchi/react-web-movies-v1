import styles from "./Empty.module.css";
import { TfiFaceSad } from 'react-icons/tfi';
// Este componente es para cuando no encontramos ninguna pelicula
export const Empty = () => {
  return (
    <div className={styles.noResult}>
      <h1 className={styles.notFound}>No hay resultados</h1>
      <TfiFaceSad size={90} />
    </div>
  );
};
