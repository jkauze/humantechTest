import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { PeliculaComponent } from '../../pelicula/pelicula.component'
import { NotificationsComponent } from '../../notifications/notifications.component';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    MatRadioModule,
    MatInputModule,
    MatNativeDateModule,
    NgbModule,
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    NotificationsComponent,
    PeliculaComponent,
  ]
})

export class AdminLayoutModule {}
