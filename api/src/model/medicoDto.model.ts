import { PessoaAbs } from "src/model/pessoaAbs/pessoaAbs.model";

//Modelo que um objeto medico, deve seguir.
export class MedicoDto implements PessoaAbs {
  readonly nome: string;  //PessoaAbs
  readonly login: string; //PessoaAbs
  readonly senha: string; //PessoaAbs
  readonly telefone: string;
  readonly especialidade: string;
  readonly endereco: string;  //PessoaAbs
}