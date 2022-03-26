var animais = [
    { animal: 'Cachorro', raca: 'Akita' },
    { animal: 'Cachorro', raca: 'Boxer' },
    { animal: 'Cachorro', raca: 'Dálmata' },
    { animal: 'Cachorro', raca: 'Pastor alemão' },
    { animal: 'Gato', raca: 'Persa' },
    { animal: 'Gato', raca: 'Sphynx' },
    { animal: 'Gato', raca: 'Siamês' },
    ]

   
function percoreArray(elemento){
    
    console.log(elemento.animal ,"->", elemento.raca);
}
animais.forEach(percoreArray);