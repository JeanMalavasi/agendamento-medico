import { MedicoDto } from "src/model/medicoDto.model";

//Modelo que um objeto agenda, deve seguir.
export class AgendaDto {
  readonly data: number;
  readonly horario: number;
  readonly medico: string;
  readonly paciente: string;
}