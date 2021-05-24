import { PessoaAbs } from "src/pessoaAbs/pessoaAbs.model";

//Modelo que um objeto paciente, deve seguir.
export class PacienteDto implements PessoaAbs{
  readonly nome: string;  //PessoaAbs
  readonly login: string; //PessoaAbs
  readonly senha: string; //PessoaAbs
  readonly identidade: string;
  readonly cpf: string;
  readonly plano: string;
  readonly endereco: string;  //PessoaAbs

}