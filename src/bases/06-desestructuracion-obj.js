const persona = {
    nombre: 'Sergio',
    edad: 30,
    clave: 'QA',
};

const context = ({clave, nombre, edad}) => {

    return{
        nombreClave: clave,
        anios: edad,
        personaje: nombre,
        coordenadas:{
            lat: 12.365140,
            lng: -25.21536
        }
    };
};

const { nombreClave, anios, personaje, coordenadas: {lat, lng} } = context(persona);

console.log(nombreClave, anios, personaje);
console.log(lat, lng);