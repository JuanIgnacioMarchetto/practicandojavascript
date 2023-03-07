var paices=[
    {pais:'Argentina', provincia:'bs as'},
    {pais:'brazil', provincia:'brazilia'},
    {pais:'mexico', provincia:'mexico'},
    {pais:'Argentina', provincia:'mendoza'},
    {pais:'Argentina', provincia:'bs as'},
    {pais:'eeuu', provincia:'california'},
   
];
var argentinos=0;


var argentinos= paices.reduce(function(contador,paices){
if(paices.principal==='Argentina'){
    return contador + 1;
}else{
    return contador;
}
},)

//console.log(argentinos)


const numbers =[10,0,50,125,75,6,3];

const res =numbers.reduce((acc,item)=>{
return Math.max(acc,item);
});
console.log(res);

const suma =[1,2,3,4,5];
 
const sumaTotal= suma.reduce((previousValue, currenntValue)=>{
    return previousValue + currenntValue;
});

//console.log(sumaTotal);

