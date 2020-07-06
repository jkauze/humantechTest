import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Pelicula } from './models/pelicula';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listaPeliculas: Pelicula[] = [
    {id: 1, name: 'Los vengadores', status: true, fecha: new Date()},
    {id: 2, name: 'Madmax', status: false, fecha: new Date()},
    {id: 3, name: 'Furia de Titanes', status: false, fecha: new Date(2013, 3, 13)},
    {id: 3, name: 'JoJo Rabit', status: false, fecha: new Date(2019, 6, 23)},
    {id: 3, name: '1917', status: false, fecha: new Date(2017, 1, 4)},
    {id: 3, name: 'IT II', status: false, fecha: new Date(2019, 5, 2)},
    {id: 3, name: 'Dr. Strange', status: false, fecha: new Date(2001,5,8)},
    {id: 3, name: 'RedStone', status: false, fecha: new Date(2007, 11, 12)},
  ]

     constructor(public location: Location) {}

    ngOnInit() {
      localStorage.setItem('datos', JSON.stringify(this.listaPeliculas));
    }

}
