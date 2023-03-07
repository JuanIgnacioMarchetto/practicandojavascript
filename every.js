const temperatura=[17,102,31,-14];

function calor(valor){
    return valor < 0;
};
const mayor=temperatura.every( calor);

//console.log(mayor);

const redes =[ 'youtube','instagram','faceboock'];
 const every= redes.every ((item,index,array)=>{
    return item === 'youtube';
 })
 //console.log (every);

const masSeis =[ 'youtubes','instagram','faceboock'];
 let seis= redes.every (function(palabra){
    return palabra.length >= 6;
 })
 console.log(seis);