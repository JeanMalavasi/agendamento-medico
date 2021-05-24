import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-medicos',
  templateUrl: './lista-de-medicos.component.html',
  styleUrls: ['./lista-de-medicos.component.css']
})
export class ListaDeMedicosComponent implements OnInit {

  constructor(private http: HttpClient) { }
  medicos: any = []

  ngOnInit(): void {
   this.pegarTodos()
  }

  pegarTodos() {
    this.http
    .get('http://localhost:3000/medico')
    .subscribe(
      (res): any => {
        this.medicos = res;
        console.log(this.medicos)
      },
      (err) => {
          console.log(err) ;
      }
    );
  }
  
}
