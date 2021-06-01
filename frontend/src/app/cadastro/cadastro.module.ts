import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppRoutingModule } from '../app.routing';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule

  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
