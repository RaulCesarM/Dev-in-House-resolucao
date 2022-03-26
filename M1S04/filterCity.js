//- Dado o array de cidades abaixo, filtre apenas as cidades com mais de 200000 habitantes;
//- Após o filtro ordene por ordem decrescente de acordo com a população (primeiro cidades mais populosas);

const cidades = [
  { nome: "Patos de Minas", populacao: 153585 },
  { nome: "Lages", populacao: 157349 },
  { nome: "Ibiúna", populacao: 79479 },
  { nome: "Maringá", populacao: 403063 },
  { nome: "Curitiba", populacao: 1963726 },
  { nome: "Florianópolis", populacao: 508826 },
  { nome: "Pato Branco", populacao: 84779 },
];

const MorePopulation = cidades.filter((POP) => POP.populacao > 200000);
console.table(MorePopulation);

MorePopulation.sort(function (x, y) {
  return y.populacao - x.populacao;
});
console.table(MorePopulation);
