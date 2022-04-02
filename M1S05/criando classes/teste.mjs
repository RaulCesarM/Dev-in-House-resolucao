

import { Pedido } from "./Pedidos.mjs";
import { Produtos } from "./Produto.mjs";

// teste



let Televisor = new Produtos();
Televisor.nome = "Tv";
Televisor.emEstoque =true;
Televisor.preco = 2000;
Televisor.quantidade =3;

let arcondicionado = new Produtos();
arcondicionado.nome = "Ar";
arcondicionado.preco=800
arcondicionado.emEstoque = true;
arcondicionado.quantidade = 5;

let bicicleta = new Produtos();
bicicleta.nome="adventure bike"
bicicleta.preco= 15.000
bicicleta.quantidade = 3;
bicicleta.emEstoque = true;





let carrinhoDeCompra = [bicicleta,arcondicionado,Televisor]




const pedido1 = new Pedido();
pedido1.estaPago = "sim"
pedido1.nomeCliente= "Raul cesar";
pedido1.numeroPedido= 123;
pedido1.colocaDataPedido();
pedido1.adicionarProduto([...carrinhoDeCompra]);

// console.log(pedido1)


console.log(pedido1.mostrar())

console.log(pedido1.calcularTotal())


