import App from "./App";
import Tarea from "./Tarea";

console.log("hola mundo");

const listaTareas= new App();
//const tarea1 = new Tarea(...);

//listaTareas.agregarTarea(tarea1);
const tareaBuscada = listaTareas.buscarTarea("tarea1");
//tareaBuscada.setTitulo("tituloNuevo");// ver como guardar el dato modificado en archivo json