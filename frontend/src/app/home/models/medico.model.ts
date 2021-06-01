
//Modelo que um objeto paciente, deve seguir.
export class Medico{
   nome: string;  //PessoaAbs
   login: string; //PessoaAbs
   senha: string; //PessoaAbs
   telefone: string;
   especialidade: string;
   endereco: string;
   agendas: string[]
   _id: string


   constructor(agenda: string[], endereco: string, especialidade: string, login: string, nome: string, senha: string, telefone: string, _id: string){
      this.agendas = agenda
      this.endereco = endereco
      this.especialidade = especialidade
      this.login = login
      this.nome = nome
      this.senha = senha
      this.telefone = telefone
      this._id = _id
      
      
   }
}