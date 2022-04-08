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

// sleep(true);

// function sleep(valor) {
//   return new Promise((resolve, reject) => {
//     if (valor === true) {
//       setTimeout(() => resolve(console.log(" resolveu com ->", valor)), 3000);
//     } else {
//       setTimeout(
//         () => reject(console.log("nao  resolveu, a resposta foi ->", valor)),
//         3000
//       );
//     }
//   });
// }




// let sleep = (valor)=>{
         
//          return new  Promise((resolve , reject)=>{
//            (valor >= 18) 
//            ?
//             setTimeout(() => resolve(console.log("Sua CNH já está autorizada pois você já tem "+ valor + " anos e já é de maior")), 3000)
//            :
//             setTimeout(() => reject(console.log("Ainda não tem autorização para tirar a CNH pois tem " + valor + " anos e ainda é de menor")), 3000 );
            
//            });                   
          
// };
// sleep(5).then(resolve => {
//  resolve ;
// }).catch(reject => {
//   reject;
// });





function meuSleep (teste){
  return new Promise((resolve, reject) => {
    setTimeout(() => {  
      let respostaCerta = `Tempo de sleep cinco segundos`;   
      let respostaErrada = 'TEVE ERRO';     
  
       if (teste === "true") {
          resolve((console.log(respostaCerta.toUpperCase())));
       } else {
          reject((console.log(respostaErrada)));
       }
    }, 5000);
  });
  



} 

let resposta = "tr";



  meuSleep(resposta)
  .then(resolve => {
     resolve;
    }).catch(reject => {
      reject;
    });