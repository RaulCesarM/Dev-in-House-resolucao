

import { Pedido } from "./Pedidos.mjs";
import { Produtos } from "./Produto.mjs";





let Televisor = new Produtos();
Televisor.nome = "Tv";
Televisor.preco = 2000;
Televisor.quantidade =3;
Televisor.emEstoque =20;


let arcondicionado = new Produtos();
arcondicionado.nome = "Ar";
arcondicionado.preco=800;
arcondicionado.quantidade = 5;
arcondicionado.emEstoque = 23;


let bicicleta = new Produtos();
bicicleta.nome="bike"
bicicleta.preco= 15000
bicicleta.quantidade = 3;
bicicleta.emEstoque = 12;

let geladeira = new Produtos();
geladeira.nome = "aGel";
geladeira.preco = 3000;
geladeira.quantidade =2;
geladeira.emEstoque = 5;


let notebook = new Produtos();
notebook.nome="ASUS";
notebook.preco = 4000;
notebook.quantidade =5;
notebook.emEstoque = 33





let carrinhoDeCompra1 = [bicicleta,arcondicionado,Televisor]
let carrinhoDeCompra2 = [notebook,geladeira]




const pedido1 = new Pedido();
pedido1.estaPago = "sim"
pedido1.nomeCliente= "Mika";
pedido1.numeroPedido= 20220001;
pedido1.colocaDataPedido();
pedido1.adicionarProduto([...carrinhoDeCompra1]);



const pedido2 = new Pedido();
pedido2.estaPago = "sim";
pedido2.nomeCliente = "Thais";
pedido2.numeroPedido = 20220002;
pedido2.colocaDataPedido();
pedido2.adicionarProduto([...carrinhoDeCompra2]);

// console.log(pedido1)


console.table(pedido1.mostrar())

console.log(pedido1.calcularTotal())


console.table(pedido2.mostrar())

console.log(pedido2.calcularTotal())



