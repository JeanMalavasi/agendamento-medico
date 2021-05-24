import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AgendaDto } from "../model/agendaDto.model";
import { Agenda } from "../schema/agenda.schema";

//Transforma a classe em um provider, permitindo que a classe sejá injetada em outras classes.
@Injectable()
export class AgendaService {
  //Injeta um esquema na classe.
  constructor(@InjectModel(Agenda.name) private readonly agendaModel: Model<Agenda>){}

  //O "async" torna a função assincrona
  //Como o "exec()", retorna uma resposata tipo Promise, a função foi tipada apartir dela.
  async obterTodos(): Promise<Agenda[]> {
    return this.agendaModel.find().exec();
  }

  //agendaDto: É a informaçao vindo no body da requisição.
  async criar(agendaDto: AgendaDto) {
    //É criado um objeto no modelo do "schema", utilizando os valores de "agendaDto".
    //Para que os valores sejam aceitos, o nome da propriedades devem ser identicos.
    const agenda = new this.agendaModel(agendaDto);
    agenda.save()
  }
}