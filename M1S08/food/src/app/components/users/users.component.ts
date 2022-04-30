import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { IUsuario } from 'src/app/models/usuario.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'ngf-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Usuario: IUsuario = {
    nome: 'Raul',
    usuario: 'RCM',
    endereco: 'ASDSAD',
    telefone: '78787',
    cidade: 'ASDSAD',
    estado: 'SC',
    email: 'SADSADSAD',
    categoria: 'SADASDSA'
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.postUsuario(this.Usuario);


  }



  public postUsuario(Usuario: IUsuario): void {
    console.log(Usuario);

    this.http.post<IUsuario>('http://localhost:3000/usuarios', Usuario).subscribe();
   
       
  } 
 

}


