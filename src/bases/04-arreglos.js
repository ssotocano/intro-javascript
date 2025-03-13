const arreglo = [1,2,3,4];

let arreglo2 = [ ...arreglo, 5,6,7,8,9];

const arreglo3 = arreglo2.map( function(numero){
     numero*2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);