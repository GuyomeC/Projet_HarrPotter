// fetch('https://pokeapi.co/api/v2/pokemon/1002')
// .then((response) => response.json())
// .then((data) => {
//     console.log(data)
// })

function fetchPokemon(pokemon) {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
    .then((response) => response.json())
}
    

async function displayPokemon(pokemon, nbr) {
    const data = await fetchPokemon(pokemon)
    document.getElementById("pokemon" + nbr).innerHTML = `
        <h1>${data.name}<h1>
        <img src="${data.sprites.front_default}" alt="${data.name}" />
    `
}

let pokemons = ['ditto', 'blaziken' , 'pikachu', 'bulbasaur', 'charmander', 'ditto']

for (let i =0; i < 6; i++) {
    displayPokemon(pokemons[i], i)
}