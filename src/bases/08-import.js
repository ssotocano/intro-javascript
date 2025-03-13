import { heroes } from '../data/heroes';

export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

console.log(getHeroeById(2));

const getHeroesbyOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

console.log (getHeroesbyOwner('DC'));