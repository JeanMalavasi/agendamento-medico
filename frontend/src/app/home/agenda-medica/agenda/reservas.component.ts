import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Agenda } from '../../models/agenda.model';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() _idMedico: any

  agendamentos: any = []
  pacientesList: any = []
  
  ngOnInit(): void {
    this.pegarTodasAgendasDeUmMedico()
  }

  pegarTodasAgendasDeUmMedico(): any {
    this.http
      .get('http://localhost:3000/agenda/' + this._idMedico)
      .subscribe(
        (res) => {
          this.agendamentos = res
          console.log(this.agendamentos)
        },
        (err) => {
          console.log(err);
        }
      );
  }

  montaListaPacientes() {
    // this.agendamentos.forEach((element: any) => {
    //   this.idPaciente.push(element.paciente)
    // });
    let tamanho = this.agendamentos.length
    let count = 0
    while (count < tamanho) {
      this.pacientesList.push(this.agendamentos[count].paciente)
      count++;
    }
    console.log(this.pacientesList)
  }

}
