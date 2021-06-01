import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { MedicoDto } from "../model/medicoDto.model";
import { Medico } from "../schema/medico.schema";

//Marca a classe como um provider, permitindo sua injeção nas demais classes que dependem dela.
@Injectable()
export class MedicoService {

  //Injeta na classe um modelo do "medico.schema.ts"
  constructor(@InjectModel(Medico.name) private readonly medicoModel: Model<Medico>){  }

  async obterTodos(): Promise<Medico[]> {
    return this.medicoModel.find().exec()
  }

  async criar(medicoDto: MedicoDto) {
    const criarMedico = new this.medicoModel(medicoDto);
    criarMedico.save()
  }

  async ObterApenasUm(nome: string): Promise<Medico> {
    return this.medicoModel.findOne({nome:  nome})
  }
}