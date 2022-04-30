import{Pessoa} from './Exercicio08_1';

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
