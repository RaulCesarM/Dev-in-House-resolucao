// Para treinar classes e modificadores de acesso, em um arquivo chamado exercicio06.ts 
// crie 2 classes.

// A primeira será chamada de Conta,  ok
// ela terá os atributos 

// numero do tipo numérico,          ok
// saldo também do tipo numérico,    ok
// estaAtiva do tipo boleano         ok
// e dono do tipo string.            ok
//Sendo eles todos protegidos.       ok
// Construa o método construtor recebendo todos os parâmetros correspondentes aos atributos ok
// e depois popule com esses parâmetros os atributos da classe. ok

// A segunda classe se chama 
// ContaEmpresa                     ok
// ela terá apenas o atributo 
// limiteDeDeposito do tipo numérico e será privado, ok
// além disso ele sempre será 1000,
// ou seja, ele já será declarado com o valor 1000.  ok
// A classe ContaEmpresa estende a classe Conta.    ok
// Seu construtor apenas irá popular as variáveis da super classe Conta.ok
// Na classe ContaEmpresa irá existir um método chamado deposito()      ok
// que recebe um parâmetro “valor” do tipo numerico, além disso outro método será chamado
// imprimeValorConta(). ok
// O método deposito() irá pegar o saldo da conta e somar com o valor que ele recebe como parâmetro só se tiver dentro do limite da conta.ok
// Já a função imprimeValorConta() irá dar um console.log no saldo da conta.ok
// Depois da construção das classes e métodos, deposite 3500 reais chamando a função deposito(),ok
// sabendo que o limite máximo é 1000 antes de confirmar a soma e verifique se o valor recebido é menor ou igual a 1000. ok
// Depois disso chame a função imprimeValorConta() e imprima o valor total, ou seja, 3500. ok


class Conta {
    protected numero: number;
    protected saldo: number;
    protected estaAtiva: boolean;
    protected dono: string;

    constructor(numero: number, saldo: number, estaAtiva: boolean, dono: string) {
        this.numero = numero;
        this.saldo = saldo;
        this.estaAtiva = estaAtiva;
        this.dono = dono;
    }
}

class ContaEmpresa extends Conta {
    private limiteDeDeposito: number = 1000;

    constructor(numero: number, saldo: number, estaAtiva: boolean, dono: string) {
        super(numero, saldo, estaAtiva, dono);
    }

    deposito(valor: number) {
        if (valor <= this.limiteDeDeposito) {
            this.saldo += valor;
        } else {
            console.log("Valor maior que o limite de deposito");
        }
    }
    imprimeValorConta() {
        console.log(this.saldo);
    }

}
const contaSalario = new Conta(1, 1000, true, "Raul");
const ContaPatrao = new ContaEmpresa(2, 3500, true, "Raul");

console.log(contaSalario);
console.log(ContaPatrao);
ContaPatrao.deposito(3500);
ContaPatrao.imprimeValorConta();

