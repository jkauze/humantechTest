import { Component, OnInit } from '@angular/core';

// Declaracion de la tabla de peliculas
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
const header = [ 'ID', 'Name', 'Country', 'City', 'Salary']

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
    public tablaPeliculas: TableData;

  constructor() { }

  ngOnInit(): void {
    this.tablaPeliculas = {
      headerRow: [ 'ID', 'Nombre', 'F. Publicacion', 'Estado'],
      dataRows: [
          ['1', 'Dakota Rice', '15/12/12', 'Activo'],
          ['2', 'Dakota Rice', '15/12/12', 'Activo'],
          ['3', 'Dakota Rice', '15/12/12', 'Activo'],
          ['4', 'Dakota Rice', '15/12/12', 'Activo'],
          ['5', 'Dakota Rice', '15/12/12', 'Activo'],
          ['6', 'Dakota Rice', '15/12/12', 'Activo'],
      ]
    };
  }

  funcion() {
    console.log("hola")
  }


}
