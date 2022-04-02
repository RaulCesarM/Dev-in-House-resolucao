import { Produtos } from "./Produto.mjs";

export class Pedido {
  numeroPedido = Number; // id
  dataPedido; // date
  estaPago = false; //boolean
  listaProdutos = [];
  nomeCliente;

  constructor(numeroPedido, dataPedido, estaPago, listaProdutos, nomeCliente) {
    this.numeroPedido = numeroPedido;
    this.dataPedido = dataPedido;
    this.estaPago = estaPago;
    this.listaProdutos = listaProdutos;
    this.nomeCliente = nomeCliente;
  }
  adicionarProduto([...carrinhoDeCompra]) {

    this.listaProdutos=[];
    let carrinho = []
    carrinho = carrinhoDeCompra; 

   
    if (carrinhoDeCompra instanceof Object === true) {

        for(let i of carrinho){
            this.listaProdutos.push(i)
        }

    } else {
      console.log("ERROOU SEU PITOCO");
    }
  }

  colocaDataPedido() {
    this.dataPedido = new Date().toLocaleDateString("pt-BR");
  }

  mostrar() {
    let Quem = this.nomeCliente;
    this.listaProdutos.forEach(function (e) {
      console.log("mostrando", e, " do pedido de " + Quem + " ");
    });
    return "";
  }
}
