import { Body, Controller, Get, Post } from "@nestjs/common";
import { MedicoDto } from "../model/medicoDto.model";
import { Medico } from "../schema/medico.schema";
import { MedicoService } from "../service/medico.service";


//Marca a classe como um controlador.
//As chamadas http utilizarão o caminho pasado por parametro no "@Controller()".
//Exemplo: localhost:3000/hospital/medico
@Controller('medico')
export class MedicoController {

  constructor(private medicoService: MedicoService) {

  }

  //Marca o metodo abaixo, indicando que ele atenderá a requisição GET, utilizando a URL passada no controller.
  //Exemplo de requisição GET: localhost:3000/hospital/medico
  @Get()
  obterTodos(): Promise<Medico[]>{
    return this.medicoService.obterTodos();
  }

  @Post()
  async criar(@Body() body) {
    this.medicoService.criar(body)
  }
}