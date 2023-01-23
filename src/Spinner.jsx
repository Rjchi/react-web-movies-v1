// Con Ctrl + c es para cortar el proyecto que se esta ejecutando
// Estos iconos los podemos ver en la pagina react-icons
// este es el primero que sale
import { ImSpinner8 } from 'react-icons/im';
import styles from "./Spinner.module.css";

export const Spinner = () => {
    return (
        <div className={styles.spinner} >
            <ImSpinner8 className={styles.spinning} size={50} />
        </div>
    );
};