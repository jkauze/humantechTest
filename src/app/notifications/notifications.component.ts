import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showNotification(from, align, mensaje) {
      const type = ['', 'info', 'success', 'warning', 'danger'];
      let msgBody
      if (mensaje == 'eliminar') {
        msgBody = 'Pelicula eliminada correctamente'
      } else if (mensaje == 'agregar') {
        msgBody  = 'Pelicula agregada correctamente'
      } else {
        msgBody = 'Pelicula actualizada correctamente'
      }
      const color = 123;
      $.notify({
          icon: 'pe-7s-bell',
          message: msgBody
      }, {
          type: type[color],
          timer: 1000,
          placement: {
              from: from,
              align: align
          }
      });
  }
}
