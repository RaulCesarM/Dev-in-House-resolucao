/*Declare como variável em seu código o array de contas de clientes abaixo;

Crie uma função para sacar dinheiro que deve receber como parâmetro o valor a ser sacado e o id da conta;
2.1. Se o valor for menor ou igual zero deve exibir a mensagem de valor inválido e não realizar nenhuma operação;
2.2. Se o valor for maior que o saldo em conta deve exibir a mensagem de saldo insuficiente e exibir o saldo atual;
2.3. Se o valor for maior que zero e menor que o saldo em conta deve exibir a mensagem informado que o saque ocorreu com sucesso e o saldo atual da conta após o saque, além de atualizar o array com esse novo valor;

Criar função para depositar dinheiro que deve receber como parâmetro o valor a ser depositado e o id da conta;
3.1. Se o valor for menor ou igual zero deve exibir a mensagem de valor inválido e não realizar nenhuma operação;
3.2. Se o valor for maior que zero deve exibir a mensagem informado que o deposito ocorreu com sucesso e o saldo atual da conta após o deposito, além de atualizar o array com esse novo valor;

Chamar as duas funções criadas para validar os cenários;*/

const contas = [
  {
    id: 1,
    saldo: 500,
  },
  {
    id: 2,
    saldo: 30000,
  },
  {
    id: 3,
    saldo: 50,
  },
];

console.table(contas);


//////////////////ok

const SaldoCliente = (id) => {
  let Cliente = contas.find((IdConta) => IdConta.id === id);
  let saldo = Cliente.saldo;
  return saldo;
};

const ApenasSaldo = (id) => {  
 return console.log("seu saldo é de R$ : "  + SaldoCliente(id) + " !");
};

////////////////////ok

const adicionar = (id, valor) => {
  let Cliente = contas.find((IdConta) => IdConta.id === id);
  let ValorDeposito = valor;
  if (ValorDeposito <= 0) {
    console.log(
      "valor de R$: " +
        ValorDeposito +
        " é inválido e não realizar nenhuma operação !"
    );
  } else if (ValorDeposito > 0) {
    Cliente.saldo += ValorDeposito;
    console.log("Movimentação na conta de ID nº:" +id);
    console.log(
      "O deposito de R$: " +
        ValorDeposito +
        " ocorreu com sucesso e o saldo atual da conta após o deposito R$: " +
        SaldoCliente(id) +
        " !"
    );
  } else {
    return "";
  }
};

/////////////////////////////ok

const sacar = (id, valor) => {
  let Cliente = contas.find((IdConta) => IdConta.id === id);
  let ValorSaque = valor;
  let SaldoAtual = Cliente.saldo;

  if (ValorSaque <= 0) {
    console.log(
      "valor de R$: " +
        ValorSaque +
        "é inválido e não realizar nenhuma operação"
    );
  } else if (ValorSaque > SaldoAtual) {
    console.log(
      "mensagem de saldo insuficiente seu saldo é R$:" + SaldoCliente(id)
    );
  } else if (ValorSaque > 0 && ValorSaque <= SaldoAtual) {
    Cliente.saldo -= ValorSaque;
    console.log("Movimentação na conta de ID nº:" +id);
    console.log(
      "o saque de R$: " +
        ValorSaque +
        "  ocorreu com sucesso e o saldo atual da conta após o saque de R$: " +
        SaldoCliente(id) +
        " !"
    );
  } else {
    return "";
  }
};

//////////////////////////ok

const ACAO = (op, id, valor) => {
    var op = op;
    var id = id;
    var valor = valor;

  switch (op) {
    case "saldo":
      ApenasSaldo(id);
      break;

    case "deposito":
      adicionar(id, valor);
      break;

    case "saque":
      sacar(id, valor);
      break;

    default:
        console.log("Não é uma operação valida")
      break;
  }
};


////////////////testes

ACAO("saque",2, 5000);
ACAO("saldo",2);
ACAO("deposito" ,3, 100000);

console.table(contas);
