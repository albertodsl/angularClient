import { Pessoa } from "../pessoa/pessoa";

export class Telefone{
    idTelefone : number;
    telefone : string;

    constructor(idTelefone?:number,telefone?:string){
        this.idTelefone = idTelefone;
        this.telefone = telefone;
    }
}