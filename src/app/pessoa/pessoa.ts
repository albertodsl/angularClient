import { Telefone } from './../telefone/telefone';
export class Pessoa{
    idPessoa : number;
    nomePessoa : string;
    email : string;

    telefones : Telefone[] = [];

    constructor(idPessoa?:number,nomePessoa?:string,email?:string){
        this.idPessoa = idPessoa;
        this.nomePessoa = nomePessoa;
        this.email = email;
    }

}