let multiplicando = 2;
let produto= 0;
let ARRAY = [];




for (let multiplicador = 1; multiplicador <=10; multiplicador++) {
    produto = multiplicando * multiplicador;
    ARRAY [multiplicador] = " 2 X " +  multiplicador + " = " + produto ;
    
}

console.table(ARRAY);