import {TareaCategoria, TareaPrioridad} from './enums';

export default class Tarea {

    private titulo: string;
    private descripción: string;
    private fechaVto: Date;
    private nivelPrioridad:TareaPrioridad;
    private esRelevante: boolean;
    private porcentajeAvance: number;
    private completada: boolean;
    private categoria: TareaCategoria;
    private etiquetas: Array<string>;

    constructor(titulo: string,descripción: string,fechaVto: Date, nivelPrioridad: TareaPrioridad, esRelevante: boolean, porcentajeAvance: number, completada: boolean, categoria: TareaCategoria) {
        this.titulo = titulo;
        this.descripción = descripción;
        this.fechaVto = fechaVto;
        this.nivelPrioridad = nivelPrioridad;
        this.esRelevante = esRelevante;
        this.porcentajeAvance = porcentajeAvance;
        this.completada = completada;
        this.categoria = categoria;
        this.etiquetas =[];
    }

    // Getters
    public getTitulo(): string {
        return this.titulo;
    }

    public getDescripción(): string {
        return this.descripción;
    }

    public getFechaVto(): Date {
        return this.fechaVto;
    }

    public getNivelPrioridad(): TareaPrioridad {
        return this.nivelPrioridad;
    }

    public getEsRelevante(): boolean {
        return this.esRelevante;
    }

    public getPorcentajeAvance(): number {
        return this.porcentajeAvance;
    }
    public getCompletada(): boolean {
        return this.completada;
    }
    public getCategoria(): TareaCategoria {
        return this.categoria;
    }
    public getEtiquetas(): Array<string>{
        return this.etiquetas;
    }
    // Setter
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setDescripción(descripción: string): void {
        this.descripción = descripción;
    }

    public setFechaVto(fechaVto: Date): void {
        this.fechaVto = fechaVto;
    }

    public setNivelPrioridad(nivelPrioridad: TareaPrioridad): void {
        this.nivelPrioridad = nivelPrioridad;
    }

    public setEsRelevante(esRelevante: boolean): void {
        this.esRelevante = esRelevante;
    }

    public setPorcentajeAvance(porcentajeAvance: number): void {
        this.porcentajeAvance = porcentajeAvance;
    }
    public setCompletada(completada: boolean): void {
        this.completada = completada;
    }
    public setCategoria(categoria: TareaCategoria): void {
        this.categoria = categoria;
    }
    public agregarEtiqueta(e: string): void {
        this.etiquetas.push(e);
    }
    public eliminarEtiquetas(e: string): void {
        //BORRAR DEL ARRAY
    }

}
