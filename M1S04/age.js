let age = 15;
let velhice = "";

if (age <= 15) {
  velhice = "Vc é jovem ainda aproveite para estudar JS";
  velhiceF(velhice);
} else if (age >= 16 && age <= 65) {
  velhice = "Vc ja é adulto esta na hora pagar suas proprias contas";
  velhiceF(velhice);
} else {
  velhice = "Ja combateu o bom combate, aproveite a primavera em paris";
  velhiceF(velhice);
}

function velhiceF(velhice) {
  console.log(velhice);
}
