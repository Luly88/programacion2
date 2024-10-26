import Tarea from "./Tarea";
export default class App {
    private tareas:Array<Tarea>;

    constructor (){
        this.tareas = [];
    }

    public agregarTarea(t: Tarea){

    }
    
    public editarTarea() {
        
    }
    public buscarTarea(titulo:string): Tarea|undefined {
        return this.tareas.find((t) => t.getTitulo() == titulo);
    }
    public buscarTareasPorVto(f:Date): Array<Tarea>{
        return this.tareas.filter((t) => t.getFechaVto()== f);

    }
    public cargarPorcentajeAvance(titulo: string, a: number):void{
        const tarea = this.buscarTarea(titulo);
        tarea.setPorcentajeAvance(a);

    }

    public marcarTareaCompletada(titulo: string):void{
        const tarea = this.buscarTarea(titulo);
        tarea.setPorcentajeAvance(100);  
        tarea?.setCompletada(true);
    }
    public eliminarNoRelevantes():void{
        // recorrer el Arrary y borrar las no relevantes
    }

    public buscarTareasConEtiqueta(e: string): Array<Tarea>{
        //recorrer todas y ver cual es la que tiene la etiqueta buscada
    }
    public buscarTareasPendientes(): Array<Tarea>{
        return this.tareas.filter((t) => !t.getCompletada()); // filta por el completada y devuelve un array
    }
    public buscarTareasCompletadas(): Array<Tarea>{
        return this.tareas.filter((t) => t.getCompletada()); 
    }
    public getTasaFinalizacion():number{
        return this.buscarTareasCompletadas().length / this.tareas.length;
    }
    
    // ver temas del tiempo dedicado a la tareas y metricas relevantes?
   
}