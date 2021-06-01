import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from '../app.routing';
import { ListaMedicaComponent } from './lista-medica/lista-medica.component';
import { AgendaMedicaComponent } from './agenda-medica/agenda-medica.component';
import { ReservasComponent } from './agenda-medica/agenda/reservas.component';


@NgModule({
  declarations: [
    ListaMedicaComponent,
    AgendaMedicaComponent,
    ReservasComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
    ListaMedicaComponent
  ]
})
export class HomeModule { }
