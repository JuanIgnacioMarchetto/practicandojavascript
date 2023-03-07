const personas=[
    {name:'midu',age:16},
    {name:'marta',age:17},
    {name:'dani',age:19},
    {name:'dibu',age:15},
]

personas.some((persona)=>{
return persona.age > 18});

//console.log(persona.age)

const array=[1,20,3,17,33,36,67,100];

const isMoretwenty= valor=>valor>20;
const valorMayorCero=array.some(isMoretwenty);

//console.log(valorMayorCero);

const palabras = ['pep','perro','tomate','tentaculo','conejos'];

const masDeSeis = palabras.some(function(palabra){
    return palabra.length > 6;
});
console.log(masDeSeis)