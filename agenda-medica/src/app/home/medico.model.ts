
//Modelo que um objeto paciente, deve seguir.
export class Medico{
   nome: string;  //PessoaAbs
   login: string; //PessoaAbs
   senha: string; //PessoaAbs
   telefone: string;
   especialidade: string;
   endereco: string;


   constructor(nome: string, login: string,
    senha: string, telefone: string, especialidade: string, endereco: string){
     this.nome = nome
     this.login = login
     this.senha = senha
     this.telefone = telefone
     this.especialidade = especialidade
     this.endereco = endereco
   }
}