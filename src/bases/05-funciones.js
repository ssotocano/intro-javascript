const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log (saludar('Sergio'));
console.log (saludar2('Camilo'));
console.log (saludar3('Carlos'));
console.log (saludar4());

const getUser = () => ({
    uid: 'ABC1234',
    username: 'demo1234'
});

const user = getUser();

console.log(user);

function getUserActivo( nombre ){
    return{
        uid: 'XYZ12345',
        username: nombre
    }
};

const usuarioActivo = getUserActivo('Sergio');
console.log( usuarioActivo);

const getUserActivo2 = (username) => ({
    uid:'QWERTY0987',
    username: username
});

const useractivo2 = getUserActivo2('ssoto');
console.log(useractivo2);