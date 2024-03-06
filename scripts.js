async function fetchPokemonDetails(url) {
    const response = await fetchPokemons(url);
    const data = await response.json();

    return data;
}