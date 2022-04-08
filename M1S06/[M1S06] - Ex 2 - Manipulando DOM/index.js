const Calcular = () => {
  var select = document.getElementById("operacao");
  var mostra = document.getElementById("resultado");
  var opcaoValor = select.options[select.selectedIndex].value;
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var resultadoOP;

  console.log(opcaoValor);
  console.log(num1);
  console.log(num2);

  if (opcaoValor === "soma") {
    resultadoOP = parseInt(num1) + parseInt(num2);
    mostra.innerText = ("Resultado : "+ resultadoOP);
  }else if (opcaoValor === "subtracao") {
    resultadoOP = parseInt(num1) - parseInt(num2);
    mostra.innerText = ("Resultado : "+ resultadoOP);
  }else if (opcaoValor === "multiplicacao") {
    resultadoOP = parseInt(num1) * parseInt(num2);
    mostra.innerText = ("Resultado : "+ resultadoOP);
  }else if (opcaoValor === "divisao") {
    resultadoOP = parseInt(num1) / parseInt(num2);
    mostra.innerText = ("Resultado : "+ resultadoOP);
  }else{
    mostra.innerText = "No Results";
  }

};
