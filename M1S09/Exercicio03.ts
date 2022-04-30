class aluno{
    nome: string;
    matricula: number;
    ativo:boolean;
    cadeiras:string[];
   
}

var alunoexemplar = new aluno();

alunoexemplar.nome = "Raul Cesar Mulerschat";
alunoexemplar.matricula = 33;
alunoexemplar.ativo = true;
alunoexemplar.cadeiras = ["Matematica","Portugues","Historia,Geografia,fisica"];

console.log(alunoexemplar);