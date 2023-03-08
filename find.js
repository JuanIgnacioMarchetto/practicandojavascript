
const array = [1,2,3,4,5,6];

let numero = array.find
(elemento => elemento==5);

//console.log(numero);

const persona = [
    {
      name: "florin",
      lasname:'proro'
    },
    {
        name: "pedro",
        lasname:'senso'
      },
      {
        name: "mirna",
        lasname:'lkdv'
      },
  ];
  const res = persona.find(encuentroMirna);

function encuentroMirna (señora ){
    return señora.name==='mirna';
}

//console.log(res);

const aficiones =[
    {
        name: "pablo",
        hobby:"guitarra"
      },
      {
        name: "raquel",
        hobby:"xilofon"
      },
      {
        name: "pedro",
        hobby:"pintar"
      },
      {
        name: "muriel",
        hobby:"perros"
      },
];
let pasatiempo = aficiones.find(function(persona){
    return persona.hobby ==="guitarra";
   
}) 
console.log(pasatiempo);