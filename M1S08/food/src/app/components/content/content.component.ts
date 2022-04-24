import { Component, Input, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproduto } from 'src/app/models/produto.model';



@Component({
  selector: 'ngf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  listaDeProdutos: Iproduto[] = [];//criei uma lista de produtos que vou chamar no ngfor
  listaCategorizada: Iproduto[] = [];
  selecionado = localStorage.getItem('selecao');

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.selecionado = localStorage.getItem('selecao');///aqui esta a ctegiria do localstorage 



    this.http//isssso ai tu prescisa do http ///de pois tu da um get pra pegar os dados do json
      .get<Iproduto[]>('http://localhost:3000/produtos')///esse daqui é o endereço do backend
      .subscribe((resultado) => {
        this.listaDeProdutos = resultado; //aqui ele pega todos os dados
        this.listaCategorizada = resultado.filter(x => x.categoria == this.selecionado);//aqui ele filtra os dados pelo categoria
      });
  }

}


