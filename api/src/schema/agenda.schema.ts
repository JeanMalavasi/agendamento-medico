import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Medico } from "src/schema/medico.schema";
import { Paciente } from "src/schema/paciente.schema";

//Marca a classe como um esquema do mongoDB, mapeando a classe para uma coleçao com o mesmo nome mas com um "s" no fim.
@Schema()
export class Agenda extends Document {
  //Marca a propiedade abaixo, como uma propriedade no esquema
  @Prop({required: true})
  data: string;

  @Prop({required: true})
  horario: string;

  @Prop({required: true})
  nome: string;

  //Indica a ligação entre os modelos do banco
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Medico'})
  medico: Medico;
  
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' })
  paciente: Paciente;

}

export const AgendaSchema = SchemaFactory.createForClass(Agenda)