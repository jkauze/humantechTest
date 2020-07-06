import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pelicula } from '../models/pelicula';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NotificationsComponent} from '../notifications/notifications.component'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  DataPelicula: Pelicula;

  // Modal
  model: NgbDateStruct;

  // Cabeceras de la tabla
  headers = [ 'ID', 'Nombre', 'F. Publicacion', 'Estado', 'Accion']

  // Objeto pelicula a manipular en el ngModel
  selectedPelicula: Pelicula = new Pelicula();

  // Lista de peliculas almacenadas en el localstorage
  stackPeliculas = JSON.parse(localStorage.getItem('datos'));

  // componente de notificaciones
  notification = new NotificationsComponent();

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
    // const notification = new NotificationsComponent();
    console.log(this.stackPeliculas)
  }

  /* Funciones de los modals */

  // Agregar una nueva pelicula: El id sera el tamanao del arreglo + 1
  agregarPelicula() {
    this.selectedPelicula.id = this.stackPeliculas.length + 1;
    this.stackPeliculas.push(this.selectedPelicula);
    localStorage.setItem('datos', JSON.stringify(this.stackPeliculas));
    this.selectedPelicula = new Pelicula();
    this.notification.showNotification('top', 'right', 'agregar')
    this.modal.dismissAll()
  }

  // Editar una pelicula a partir de la pelicula seleccionada
  editarPelicula() {
    localStorage.setItem('datos', JSON.stringify(this.stackPeliculas));
    this.selectedPelicula = new Pelicula();
    this.notification.showNotification('top', 'right', 'editar')
    this.modal.dismissAll()
  }

  // Eliminar una pelicula seleccionada luego de confirmar
  eliminar(pelicula) {
    if (confirm(`Esta seguro de eliminar esta pelicula: ${pelicula.name} ?`)) {
      this.stackPeliculas = this.stackPeliculas.filter(item => item != pelicula)
      this.selectedPelicula = new Pelicula();
      localStorage.setItem('datos', JSON.stringify(this.stackPeliculas));
      this.notification.showNotification('top', 'right', 'eliminar')
    }
  }

  /* Apertura de Dialogos */

  // Pasamos como parametro al modal la pelicula seleccionada
  dialogEditar(dialogo, pelicula) {
    this.DataPelicula = pelicula
    this.selectedPelicula = pelicula

    const modaleditar = this.modal.open(dialogo, {centered: true, size: 'm'});
    modaleditar.result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
    console.log(modaleditar)
  }

  // Dialogo para agregar nueva pelicula
  dialogAgregar(dialogo) {
    this.modal.open(dialogo, {centered: true, size: 'm'});
  }

  /* validacion para requisitos de agregar nueva pelicula */
  puedeGuardar() {
    if (this.selectedPelicula.name && typeof(this.selectedPelicula.status) == 'boolean' && this.selectedPelicula.fecha) {
      return true
    } else {
      return false
    }
  }

}
