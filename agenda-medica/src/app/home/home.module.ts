import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaDeMedicosComponent } from './lista-de-medicos/lista-de-medicos.component';



@NgModule({
  declarations: [
    AgendaComponent,
    ListaDeMedicosComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
 
  ],
  exports: [
    ListaDeMedicosComponent
  ]
})
export class HomeModule { }
