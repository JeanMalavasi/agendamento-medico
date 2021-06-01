import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Agenda } from '../models/agenda.model';
import { Medico } from '../models/medico.model';

@Component({
  selector: 'app-agenda-medica',
  templateUrl: './agenda-medica.component.html',
  styleUrls: ['./agenda-medica.component.css']
})
export class AgendaMedicaComponent{
  flag: boolean = false
  constructor() { }

  @Input() medicoModel: any
  
  
}
