import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  endPoint : string = 'http://localhost:8080/rs';

  constructor(private http : HttpClient) { }

  getPessoas(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.endPoint + '/pessoas');
  }

  getPessoaById(id : number): Observable<Pessoa>{
    return this.http.get<Pessoa>(this.endPoint + '/pessoa/' + id);
  }

  postPessoa(pessoa : Pessoa): Observable<any>{
    return this.http.post(this.endPoint + '/pessoa', pessoa);
  }
  
  putPessoa(pessoa : Pessoa): Observable<any>{
    return this.http.put(this.endPoint + '/pessoa', pessoa);
  }

  deletePessoa(id : number): Observable<any>{
    return this.http.delete(this.endPoint + '/pessoa/' + id);
  }
}
