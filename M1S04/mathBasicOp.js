const expr = "#";
let PRIMEIRO = 2;
let SEGUNDO = 6;

matematica(PRIMEIRO, SEGUNDO, expr);

function matematica(N1, N2, expr) {
  switch (expr) {
    case "*":
      console.log(N1 * N2);
      break;
    case "-":
      console.log(N1 - N2);
      break;

    case "+":
      console.log(N1 + N2);
      break;
    case "/":
      console.log(N1 / N2);
      break;

    default:
      console.log(`Sorry, meu amigo não temos a expressão ${expr}.`);
  }
}
