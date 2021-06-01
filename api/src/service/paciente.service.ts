import {  Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PacienteDto } from "../model/pacienteDto.model";
import { Paciente } from "../schema/paciente.schema";



//Transforma a classe em um provider, permitindo que a classe sejá injetada em outras classes.
@Injectable()
export class PacienteService {
  //Injeta um esquema na classe.
  constructor(@InjectModel(Paciente.name) private readonly pacienteModel: Model<Paciente>){}

  //O "async" torna a função assincrona
  //Como o "exec()", retorna uma resposata tipo Promise, a função foi tipada apartir dela.
  async obterTodos(): Promise<Paciente[]> {
    return this.pacienteModel.find().exec();
  }

  //pacienteDto: É a informaçao vindo no body da requisição.
  async criar(pacienteDto: PacienteDto) {
    //É criado um objeto no modelo do "schema", utilizando os valores de "pacienteDto".
    //Para que os valores sejam aceitos, o nome da propriedades devem ser identicos.
    const paciente = new this.pacienteModel(pacienteDto);
    paciente.save()
  }

  async ObterUm(id: number): Promise<Paciente> {
    return this.pacienteModel.findById( id )
    // return this.agendaModel.find().exec();
  }

  async ObterApenasUm(teste: string): Promise<Paciente> {
    return this.pacienteModel.findOne({cpf:  teste})
  }
}