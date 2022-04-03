// // Crie uma função chamada sleep, que recebe como argumento um valor qualquer.

// // Quando chamada, essa função precisa retornar,
//  após 3 segundos (setTimeout),
//   uma Promise resolvida com o valor que foi passado como argumento.

// // Ex.:

// // function sleep ( valor ) {
// //   return new Promise ( (res, rej) => {
// //      setTimeout( ... )
// //   })
// // }

sleep(true);

function sleep(valor) {
  const resposta = valor;

  return new Promise((resolve, reject) => {
    if (resposta === true) {
      setTimeout(() => resolve(console.log(" resolveu com ->" ,resposta)), 3000);
    } else {
      setTimeout(() => reject(console.log("nao  resolveu, a resposta foi ->", resposta)), 3000);
    }
  });
}
