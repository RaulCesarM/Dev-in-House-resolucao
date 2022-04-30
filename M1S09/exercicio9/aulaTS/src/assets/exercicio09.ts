// Crie um arquivo chamado exercicio09.ts ok
// crie uma interface chamada Produto,    ok
// nela terá os atributos                ok
// nome: string,                        ok
// valor: number,                      ok
// codigo: number,                    ok
// quantidade: number,                ok
// emEstoque: boolean e                   ok
// apenas declare um método chamado comprar(),  ok
// esse método é opcional                      ok
// e recebe como parâmetro produto do tipo Produto e quantidade do tipo number.     ok

// Em um projeto angular,   ok
// na pasta assets adicione o arquivo exercicio09.ts ok
// e siga as instruções abaixo:            ok

//- No html do component(app.component.html) apague todo o código e cole esse código: ok

// <h2>
//     Total da compra: { { valorTotal } }  ok
// </h2>

// Criar a variável valorTotal do tipo number no app.component.ts ok
// A classe no app.component.ts 
//deve ser implementada com a interface que criamos no arquivo exercicio09.ts,ok
// ou seja, faça a importação correta na classe.ok
// Deverá ser declarado todos os atributos da interface  ok
//com os devidos tipos e todos com o modificador privado.( não é possivel desta forma)
// Crie o objeto abaixo: ok

// sofa: Produto = {
// nome: "Sofá 4 lugares",
// valor: 120,
// codigo: 1,
// quantidade: 30,
// emEstoque: true
// };
// Crie também o método comprar() 
//com os seus parâmetros e implemente ele para que se o produto passado estiver em estoque(emEstoque == true)
// ele multiplique o valor do produto pela quantidade(valor quantidade)
// e diminua essa quantidade, da quantidade do objeto criado no passo acima(produto.quantidade = produto.quantidade - quantidade).
// No método ngOnInit chame a função comprar()
//passando como parâmetro o objeto sofa e 30,
// na linha de baixo chame o mesmo método passando nos parâmetros novamente o objeto sofa e 10 *.
// Rode o projeto com “ng serve” e veja o resultado em tela.



export interface Produto {
    nome: string;
    valor: number;
    codigo: number;
    quantidade: number;
    emEstoque: boolean;

    comprar?(produto: Produto, quantidade:number): void;
}



