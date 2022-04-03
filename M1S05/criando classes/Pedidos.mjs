import { Produtos } from "./Produto.mjs";

export class Pedido {
  numeroPedido; // int
  dataPedido; // date
  estaPago = false; //boolean
  listaProdutos;// array list
  nomeCliente;// string
  total;//double

  constructor(numeroPedido, dataPedido, estaPago, listaProdutos, nomeCliente) {
    this.numeroPedido = numeroPedido;
    this.dataPedido = dataPedido;
    this.estaPago = estaPago;
    this.listaProdutos = listaProdutos;
    this.nomeCliente = nomeCliente;
    
  }
  adicionarProduto([...carrinhoDeCompra]) {
    this.listaProdutos = [];
    let carrinho = [];
    carrinho = carrinhoDeCompra;

    if (carrinhoDeCompra instanceof Object === true) {
      for (let i of carrinho) {
        this.listaProdutos.push(i);
      }
    } else {
      console.log("ERROO");
    }
  }

  colocaDataPedido() {
    this.dataPedido = new Date().toLocaleDateString("pt-BR");
  }

  mostrar() {
    const total = this.calcularTotal();
    let Num = this.numeroPedido;
    let Quem = this.nomeCliente;
    let Listar = this.listaProdutos;
    console.log(`Cliente : ${Quem} pedido de numero ${Num} Total : ${total}`);

    Listar.forEach((Listar) => {
      console.log(
        `Produto ${Listar.nome} com preço de ${Listar.preco.toLocaleString("pt-br",{ style: "currency", currency: "BRL" }
        )} comprou uma quantidade de ${Listar.quantidade} ! ` );
      
    });
   
    return "";
  }

  calcularTotal() {
    const produtos = this.listaProdutos;

    var total = produtos.reduce(
      (acumulado, produto) => acumulado + produto.preco * produto.quantidade,
      0
    );
        return (total.toLocaleString(
        "pt-br",
        { style: "currency", currency: "BRL" }));
  }
}
