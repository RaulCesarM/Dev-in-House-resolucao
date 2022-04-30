import { Component, OnInit } from '@angular/core';
import { Aluno, Nota } from 'src/assets/exercicio10';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends Aluno implements Nota, OnInit {
  title = 'app';
  mostrar!: string;
  
  media!: number;
  override passou!: boolean; 
  Nome!: string;



  constructor() {
    super("", 0);
  }

  cadeira!: string;
  ponto!: number;
  aluno!: Aluno;


  ngOnInit() {

    let aluno1: Aluno = new Aluno("Rambo", 7);
    let notas: Nota[] = [
      {
        cadeira: "Geografia",
        ponto: 10,
        aluno: aluno1
      },
      {
        cadeira: "Geografia",
        ponto: 8,
        aluno: aluno1
      },
      {
        cadeira: "Geografia",
        ponto: 9,
        aluno: aluno1
      },
      {
        cadeira: "Geografia",
        ponto: 7,
        aluno: aluno1
      }
    ]

    let media: number = 0;
    for (let i = 0; i < notas.length; i++) {
      media += notas[i].ponto;
    }
    media = media / notas.length;
    aluno1.aprovado(media);
    if(aluno1.passou){
      this.passou = true;
      this.mostrar = "Aprovado";
    }else{
      this.passou = false;
      this.mostrar = "Reprovado";
    }
    this.Nome = aluno1.getNome();
   
  }







}