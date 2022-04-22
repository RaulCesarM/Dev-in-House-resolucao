const Rua = document.createElement("p");
const Bairro = document.createElement("p");
const Cidade = document.createElement("p");
const Estado = document.createElement("p");


var rua = "";
var bairro = "";
var cidade = "";
var estado = "";

async function chamaCEP() {
    const cep = document.getElementById("InputCep").value;
    if(cep.length == 8){


  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  

  if (!response.ok) {
    const err = await response.json();
    return console.log("ocorreu o seguinte erro:", err.message);
  }

  const data = await response.json();
  if(data.Bairro === undefined){
    return alert("CEP não encontrado");
  }
  rua = data.logradouro;
  bairro = data.bairro;
  cidade = data.localidade;
  estado = data.uf;

  Rua.innerHTML = `${rua}`;
  Bairro.innerHTML = ` ${bairro}`;
  Cidade.innerHTML = ` ${cidade}`;
  Estado.innerHTML = `${estado}`;

  document.getElementById("IBAIRRO").appendChild(Bairro);
  document.getElementById("IRUA").appendChild(Rua);
  document.getElementById("ICIDADE").appendChild(Cidade);
  document.getElementById("IESTADO").appendChild(Estado);
}else{
    alert("CEP inválido");
}
}
