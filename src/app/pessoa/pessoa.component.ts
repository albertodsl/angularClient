import { Telefone } from './../telefone/telefone';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoa: Pessoa;
  pessoas: Pessoa[];
  telefone1: Telefone;
  telefone2: Telefone;
  msg: string;

  constructor(private service: PessoaService) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.pessoas = [];
    this.telefone1 = new Telefone();
    this.telefone2 = new Telefone();
    this.listar();
  }

  async gravar() {
    this.pessoa.telefones.push(this.telefone1);
    this.pessoa.telefones.push(this.telefone2);
    this.service.postPessoa(this.pessoa).subscribe((res) => {
      this.msg = JSON.stringify(res.text);
    });
    window.location.reload();
    alert(this.msg);
  }

  listar() {
    this.service.getPessoas().subscribe((res) => {
      this.pessoas = res;
    })
  }

  listarPorId(id: number) {
    this.service.getPessoaById(id).subscribe((res) => {
      this.pessoa = res;
    })
  }

  async atualizar() {
    this.pessoa.telefones.push(this.telefone1);
    this.service.putPessoa(this.pessoa).subscribe((res) => {
      this.msg = JSON.stringify(res.text);
    });
    this.pessoa = new Pessoa();
    window.location.reload();
    alert(this.msg);
  }

  async excluir(id: number) {
    this.service.deletePessoa(id).subscribe((res) => {
      this.msg = JSON.stringify(res.text);
    });
    window.location.reload();
    alert(this.msg);
  }

  setPessoa(pessoa: Pessoa) {
    this.pessoa = pessoa;
  }

  cleanPessoa(){
    this.pessoa = new Pessoa();
    this.telefone1 = new Telefone();
  }

  showModalUpdate(){
    let element : HTMLElement = document.getElementById('btn-update') as HTMLElement;
    element.click();
  }
}
