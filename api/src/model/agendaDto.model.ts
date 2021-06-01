
//Modelo que um objeto agenda, deve seguir.
export class AgendaDto {
  readonly data: number;
  readonly horario: number;
  readonly medico: string;
  readonly nome: string;
  readonly paciente: string;
}