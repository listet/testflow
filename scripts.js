document.querySelector('#generatePokemonBtn').addEventListener('click', function() {
    generate(pokemons);
});

function generate(pokemons) {
    let pokemon = Math.floor(Math.random() * pokemons.length)
    let url = pokemons[pokemon].url;

   let answers = fetchPokemonsDetails(url);
   renderPokemonCards(answers);
}