import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Agenda } from "src/schema/agenda.schema";

//Marca a classe como um esquema do mongoDB, mapeando a classe para uma coleçao com o mesmo nome mas com um "s" no fim.
@Schema()
export class Paciente extends Document {
  //Marca a propiedade abaixo, como uma propriedade no esquema
  @Prop({required: true})
  nome: string;
  
  @Prop({required: true, unique: true})
  login: string;
  
  @Prop({required: true, unique: true})
  senha: string;
  
  @Prop({required: true, unique: true})
  identidade: string;

  @Prop({required: true, unique: true})
  cpf: string;

  @Prop({required: true})
  plano: string;

  @Prop({required: true})
  endereco: string;

  // //Indica a ligação entre os modelos
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Agenda' })
  agenda: Agenda;

}

export const PacienteSchema = SchemaFactory.createForClass(Paciente)
