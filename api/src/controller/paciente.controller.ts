import { Body, Controller, Get, Post } from "@nestjs/common";
import { Paciente } from "../schema/paciente.schema";
import { PacienteService } from "../service/paciente.service";

//Marca a classe como um controlador.
//As chamadas http utilizarão o caminho pasado por parametro no "@Controller()".
//Exemplo: localhost:3000/hospital/paciente
@Controller('paciente')
export class PacienteController {

  constructor(private pacienteService: PacienteService) {

  }

  //Marca o metodo abaixo, indicando que ele atenderá a requisição GET, utilizando a URL passada no controller.
  //Exemplo de requisição GET: localhost:3000/medico
  @Get()
  obterTodos(): Promise<Paciente[]>{
    return this.pacienteService.obterTodos();
  }

  @Post()
  async criar(@Body() body) {
    this.pacienteService.criar(body)
  }
}