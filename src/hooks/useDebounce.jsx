import { useEffect, useState } from "react";

// Este Hook es para

export const useDebounce = (value, delay) => {
  // Obtenemos un estado...
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // delay es equivalente a la cantidad de milisegundos utilizada para ejecutar el
      // tiempo fuera
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // si el valor cambia (el search) se limpia el timeout y se crea uno nuevo
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );
  return debouncedValue;
};
