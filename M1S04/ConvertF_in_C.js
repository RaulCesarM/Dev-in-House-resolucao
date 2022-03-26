

let Fahrenheit= [ 0, 32, 45, 50, 75, 80, 99, 120 ];

//Math.round( ( elem - 32 ) * 5 / 9 );




const Celsius = Fahrenheit.map((F) => Math.round( ( F - 32 ) * 5 / 9 ));

console.log(Celsius);



