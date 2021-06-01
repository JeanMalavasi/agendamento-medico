import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
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

   //O parametro passado no "@Get", indica complemento da requisição.
  //Exemplo de requisição GET: localhost:3000/paciente/60a96334d1939a1c40ef70d4
  @Get(':id')
  async ObterUns(@Param() params): Promise<Paciente>{
    return this.pacienteService.ObterUm(params)

  }

  @Get('obterum/:cpf')
  async ObterUm(@Param('cpf') params:string): Promise<Paciente>{
    return this.pacienteService.ObterApenasUm(params)

  }

    //O parametro passado no "@Get", indica complemento da requisição.
  //Exemplo de requisição GET: localhost:3000/agenda/60a96334d1939a1c40ef70d4
  // @Get('testando/testando')
  // async ObterAlguns(@Query('listaId') listaId){
   
  //   return console.log(listaId);
    
  //   // return this.agendaService.ObterAlguns(params.id)

  // }
}