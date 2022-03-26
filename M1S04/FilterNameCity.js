/*Dado o array de cidades abaixo verificar se o array contém pelo menos uma cidade com o nome Florianópolis.
Deve ser retornado true filtrando por 'Florianópolis' ou 'florianópolis'.

Dica: Para resolver os problemas de maiúsculo e minúsculo de uma olhada em toLowerCase e toUpperCase */

const cidades = [
  { nome: "Patos de Minas", populacao: 153585 },
  { nome: "Lages", populacao: 157349 },
  { nome: "Ibiúna", populacao: 79479 },
  { nome: "Maringá", populacao: 403063 },
  { nome: "Curitiba", populacao: 1963726 },
  { nome: "Florianópolis", populacao: 508826 },
  { nome: "Pato Branco", populacao: 84779 },
];

let cidadeUp = "Florianópolis";
let cidadeLow = "florianópolis";

let maior = cidades.some((str) => {
  if (
    str.nome.toLowerCase() === cidadeUp.toLowerCase() ||
    str.nome.toLowerCase() === cidadeLow.toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
 
});
console.log(maior);


