import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Agenda } from "src/schema/agenda.schema";

//Marca a classe como um esquema do mongoDB, mapeando a classe para uma coleçao com o mesmo nome mas com um "s" no fim.
@Schema()
export class Medico extends Document {

  //Marca a propiedade abaixo, como uma propriedade no esquema
  @Prop({required: true})
  nome: string;

  @Prop({required: true, unique: true})
  login: string;

  @Prop({required: true, unique: true})
  senha: string;
  
  @Prop({required: true, unique: true})
  telefone: string;

  @Prop({required: true})
  especialidade: string;

  @Prop()
  endereco: string

  //Indica a ligação entre os modelos
  @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Agenda' }] })
  agendas: Agenda[];
}

export const MedicoSchema = SchemaFactory.createForClass(Medico)