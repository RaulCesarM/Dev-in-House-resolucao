import { Component, Input, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproduto } from 'src/app/models/produto.model';




@Component({
  selector: 'ngf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  listaDeProdutos: Iproduto[] = [];
  listaCategorizada: Iproduto[] = [];
  selecionado = localStorage.getItem('selecao');

  ////////////////////////////////////////////////////////


  public itensFiltrados: any = [];
  public itens: any = [];
  mostrarImagem: boolean = true;
  private _FiltroLista: string = '';

  public get FiltroLista(): string {
    return this._FiltroLista;
  }

  public set FiltroLista(value: string) {
    this._FiltroLista = value;
    this.itensFiltrados = 
    this.FiltroLista 
     ? 
    this.filtrarItens(this.FiltroLista)
     : 
    this.itens;
  }

  filtrarItens(FiltrarPor: string): any {
    FiltrarPor = FiltrarPor.toLocaleLowerCase();
    return this.itens.filter((itens: 
      { nome: string; categoria: string }) => 

      itens.nome.toLocaleLowerCase().indexOf(FiltrarPor) !== -1
      ||
      itens.categoria.toLocaleLowerCase().indexOf(FiltrarPor) !== -1

    );
  }


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.selecionado = localStorage.getItem('selecao');
    this.getItens();
  }


  public getItens(): void {
    this.http.get<Iproduto[]>('http://localhost:3000/produtos')
      .subscribe((resultado) => {
        this.itens = resultado;
        this.itensFiltrados = this.itens;

      });

  }









}


