import { heroes } from '../data/heroes';

export const getHeroesByName = ( name ) => {
    name = name.trim().toLowerCase();
    return heroes.filter( hero => 
        hero.superhero.trim().toLowerCase().includes( name ))

}