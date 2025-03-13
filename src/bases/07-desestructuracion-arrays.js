
const rolesIT = ['Dev', 'UX/UI', 'QA', 'DevOps'];

const [ , rol2 ] = rolesIT;

console.log( rol2);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log (letras, numeros);

const usarState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = usarState ('Sergio');

console.log(nombre);
setNombre();
