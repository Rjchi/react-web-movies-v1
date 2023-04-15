//React Libreria para generar interfaces de usuario de una manera reutilizable y mantenible 
// React para una single-page application (SPA) por el tema del componente Link
//1- node js
//2- npx create-react-app nombre-de-la-app (ESTO VA EN EL CMD)
// Vamos a utilizar una libreria react router dom para acceder a la informacion de 
// cada pelicula
// para instalar se utiliza npm install react-router-dom
// o este npm i react-router-dom@5 version 5

import { createRoot } from 'react-dom/client';
import React from "react";
// Importamos los estilos
import "./index.css";
// Importamos el componente app para renderizarlo
import {App} from "./App.jsx";

// const contenido = (
  
   //Esto no es html es JSX emula el html pero no lo es.
  
//   <div>
//     <h1>Esto es un titulo</h1>
//     <div>Hola mundo</div>
//   </div>
// );

//Los componentes siempre deben empezar en mayuscula

// const ComponenteUno = () => {
//   return (
//     <div>
//       <h1>Titulo</h1>
//       <div>Contenido</div>
//     </div>
//   );
// }

// ReactDOM.render(<Componente />, document.getElementById("root"));

//Los componentes con parametros se utilizan para ser reutilizados se puede utilizar cualquier palabra 
//en vez de props pero el uso de esta es un estandar.

// const ComponenteDos = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.titulo}</h1>
//       <div>{props.contenido}</div>
//     </div>
//   );
// }

//Tambien se le pueden pasar parametros por medio de las props (propiedades)

/*ReactDOM.render(
  //Aqui le pasamos los parametros al componenteDos
  <ComponenteDos titulo="Esto es un titulo" contenido="esto es el contenido"/>,
  document.getElementById("root")
);*/

//Con desestructuracion de objetos
// const { titulo, contenido } = props; o se desestructura en los parametros asi:

// const ComponenteTres = ({ titulo, contenido }) => {
//   return (
//     <div>
//       <h1>{titulo}</h1>
//       <div>{contenido}</div>
//     </div>
//   );
// }

// ReactDOM.render(
//   <ComponenteTres titulo="Esto es un titulo 3" contenido="esto es el contenido 3"/>,
//   document.getElementById("root")
// );

//Tambien se pueden pasar como hijos utilizando children

// const ComponenteCuatro = ({ titulo, children }) => {
//   return (
//     <div>
//       <h1>{titulo}</h1>
//       <div>{children}</div>
//     </div>
//   );
// }

// ReactDOM.render(
   // Hijo del componente (Hola desde React)
//   <ComponenteCuatro titulo="Esto es un titulo 3">Hola desde React</ComponenteCuatro>,
//   document.getElementById("root")
// );

//Renderizamos el componente App 

createRoot(document.getElementById('root')).render(<App />);
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );



