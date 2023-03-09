const arreglo=[
        'manzana',
        'bananas',
        'Uvas',
        'Peras',
];
const arreglo2=[
    19,
    25,
    110,
    75, 
    10,
    90,

];

arreglo.sort ()


function Comparacion(a,b){
    //-1,a si va a situar en un indice menor a b
    //0,no hay cambios
    //1, b se va a situar en un indie menor a a
    return a - b
};

console.log(arreglo)

console.log(arreglo2)