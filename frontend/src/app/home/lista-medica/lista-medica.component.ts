import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-medica',
  templateUrl: './lista-medica.component.html',
  styleUrls: ['./lista-medica.component.css']
})
export class ListaMedicaComponent implements OnInit {

  constructor(private http: HttpClient) { }
  medicos: any = []

  ngOnInit(): void {
    this.recuperarTodosMedicos()
  }

  recuperarTodosMedicos() {
    this.http
      .get('http://localhost:3000/medico')
      .subscribe(
        (res): any => {
          console.log(res)
          this.medicos = res;
        },
        (err): any => {
          console.log(err)
        }
      )
  }
}
