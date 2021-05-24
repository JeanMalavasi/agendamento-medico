import { HttpClient } from '@angular/common/http';
import { EmitterVisitorContext } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Medico } from '../medico.model';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  constructor(private http: HttpClient) { }

  @Input() pacienteModel: Medico = new Medico("", "", "", "", "", "")

  ngOnInit(): void {
   
  }


}
