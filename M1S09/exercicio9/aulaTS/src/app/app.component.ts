import { Component } from '@angular/core';
import { Produto } from 'src/assets/exercicio09';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Produto {
  title = 'aulaTS';
  valorTotal: number = 0;
  nome: string;
  valor: number;
  codigo: number;
  quantidade: number;
  emEstoque: boolean;

  constructor() {
    this.nome = "Sofá 4 lugares";
    this.valor = 120;
    this.codigo = 1;
    this.quantidade = 30;
    this.emEstoque = true;
  }
   comprar(produto: Produto, quantidade: number): void {
    if (produto.emEstoque) {
      this.valorTotal += produto.valor * quantidade;
      produto.quantidade -= quantidade;
    }
  }

  ngOnInit() {
    this.comprar(this, 30);   
  }
}






