import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Agenda } from "../schema/agenda.schema";
import { AgendaService } from "../service/agenda.service";

//Marca a classe como um controlador.
//As chamadas http utilizarão o caminho pasado por parametro no "@Controller()".
//Exemplo: localhost:3000/medico
@Controller('agenda')
export class AgendaController {

  constructor(private agendaService: AgendaService) {

  }

  //Marca o metodo abaixo, indicando que ele atenderá a requisição GET, utilizando a URL passada no controller.
  //Exemplo de requisição GET: localhost:3000/medico
  @Get()
  obterTodos(): Promise<Agenda[]>{
    return this.agendaService.obterTodos();
  }

  @Post()
  async criar(@Body() body) {
    this.agendaService.criar(body)
  }
  
  //O parametro passado no "@Get", indica complemento da requisição.
  //Exemplo de requisição GET: localhost:3000/agenda/60a96334d1939a1c40ef70d4
  @Get(':id')
  async ObterAlguns(@Param() params): Promise<Agenda[]>{
    return this.agendaService.ObterAlguns(params.id)

  }



}