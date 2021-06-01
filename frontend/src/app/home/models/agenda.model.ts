import { stringify } from "@angular/compiler/src/util";

//Modelo que um objeto paciente, deve seguir.
export class Agenda{
  _id: string
  data: string;  //PessoaAbs
  horario: string; //PessoaAbs
  medico: string; //PessoaAbs
  paciente: string;


  constructor(_id: string ,data: string, horario: string, medico: string, paciente: string){
     this._id = _id
     this.data = data
     this.horario = horario
     this.medico = medico
     this.paciente = paciente     
     
  }
}