let Miscervezas = [
    {"marca":"quilmes",capacidad:500},
    {"marca":"stella",capacidad:300},
    {"marca":"palermo",capacidad:700},
    {"marca":"heineken",capacidad:1500},
    {"marca":"corona",capacidad:500},
];
//filter--------
console,console.log(Miscervezas
    );

let MiscervezasGrandes = Miscervezas.filter(bier=>bier.capacidad >500);

console.log(MiscervezasGrandes)
// map----------
//let MiscervezasTomadas = Miscervezas.map (tomada=>tomada.capacidad -100);

//console.log(MiscervezasTomadas);

let MiscervezasTomadas = Miscervezas.map(tomadas=>{tomadas.capacidad -= 100;
return tomadas;
})
//console.log(MiscervezasTomadas);

//reduce----------

let mililitrosRestandes = Miscervezas.reduce(
    (acumulado, sig)=> acumulado +sig.capacidad,0
)

//console.log(mililitrosRestandes)

//
const autos=[
{   modelo:'ford mustang',
    kilometros: 25000,
    motor:5.0,
    produccion:2017,
    precio:25000},

{   modelo:'honda',
    kilometros: 1000,
       produccion:2021,
    precio:20000},

{   modelo:'mini cooper',
    kilometros: 35000,
    produccion:2005,
    precio:5000}
];

//map-----------

const modelos = autos.map((auto)=>autos.modelo);

const precioPeso = autos.map((autos)=>autos.precio *0.85)

//console.log(modelos, precioPeso);

//filter--------

const autoNuevo = autos.filter((autos)=>autos.kilometros<30000);

//console.log(autoNuevo)

const motorer = autos.filter((autos)=>autos.motor);

//console.log(motorer)

//reduce------------

const funcionReductora = (kilometroInicial, valorComun)=>
kilometroInicial + valorComun.kilometros;

let x = autos.reduce(funcionReductora,0);
//console.log (x)

///
const data =[
    {"name":"potatoes",
     "units":5
    },
    {"name":"milk",
    "units":7
   },

]
/*const productName = data.map(product=>product.name);
console.log(productName);*/

