// Em um arquivo chamado exercicio07.ts 
// crie uma interface chamada Pessoa OK
// com os seguintes atributos:
// nome do tipo string,             OK
// idade do tipo numérico,          OK
// rua do tipo string.              OK
// Além disso,
// crie um método chamado cadastrar().   OK

// As classes Aluno e Funcionario que irá ser implementada pela classe Pessoa e terão os seguintes atributos: ok

// Aluno   ok
// matricula do tipo numérico ok
// cadeiras do tipo array de strings. ok


// Funcionario  ok
// identificador do tipo numérico ok
// setor do tipo string. ok

// O exercício consiste em implementar o método requerido pela ok
// interface Pessoa às classes Aluno e Funcionario.   ok
// O método deverá imprimir em um console.log   ok
// todas as informações sobre o aluno e funcionário cadastrado. ok

interface Pessoa {
    nome: string;
    idade: number;
    rua: string;
    cadastrar(): void;
}

class Aluno implements Pessoa {
    nome: string;
    idade: number;
    rua: string;
    matricula: number;
    cadeiras: string[];

    cadastrar(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Rua: ${this.rua}`);
        console.log(`Matricula: ${this.matricula}`);
        console.log(`Cadeiras: ${this.cadeiras}`);
    }
}


class Funcionario implements Pessoa {
    nome: string;
    idade: number;
    rua: string;
    identificador: number;
    setor: string;

    cadastrar(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Rua: ${this.rua}`);
        console.log(`Identificador: ${this.identificador}`);
        console.log(`Setor: ${this.setor}`);
    }
}


const aluno1 = new Aluno();
aluno1.nome = "Raul Cesar Mulerschat";
aluno1.idade = 33;
aluno1.rua = "Rua dois";
aluno1.matricula = 33;
aluno1.cadeiras = ["Matematica", "Portugues", "Historia,Geografia,fisica"];

const funcionario1 = new Funcionario();
funcionario1.nome = "Raul Cesar Mulerschat";
funcionario1.idade = 33;
funcionario1.rua = "Rua dois";
funcionario1.identificador = 33;
funcionario1.setor = "Administrativo";

aluno1.cadastrar();
funcionario1.cadastrar();
