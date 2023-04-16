const API = process.env.REACT_APP_API;
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
