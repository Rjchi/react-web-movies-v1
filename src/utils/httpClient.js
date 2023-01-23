// Esto es una variable de ambiente (se utiliza para restringir el acceso)
const API = process.env.REACT_APP_API;
// Y para acceder a ella utilizamos process.env.REACT_APP_NOMBRE;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export const get = (path) => {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer " + API_TOKEN,
      "Content-Type": "application/json;charset=utf-8",
    },
    // retornamos el resultado que es una promesa que es el parseo del resultado a JSON
  }).then((resultado) => resultado.json());
};
