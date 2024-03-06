'use strict';

let pokemonsArray = [];

fetchPokemons()
async function fetchPokemons() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/pokemons.json');
        const data = await response.json();
        pokemonsArray = data;
    } catch (error) {
        console.error('Error fetching pokemons:', error);
    }
}