import { getHeroeById } from "./bases/08-import";

const getHeroeByIdAsync = ( id ) => {
    
    return new Promise( (resolve, reject) => {

        setTimeout( () => {

            const heroe = getHeroeById( id );

            if (heroe){
                resolve(heroe);
            }else{
                reject('No se puede encontrar el heroe');
            }
        }, 2000);
    });
}

getHeroeByIdAsync(1)
    .then( heroe => console.log ('Heroe', heroe))
    .catch( error => console.log (error));