import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon.slice(0, 10); //arrays
const cardPokemon = document.getElementById("card-pokemon");
let cards = "";
for (var chavePokemon in pokemons) {
    const pokemonAtual = pokemons[chavePokemon];

    cards += `<div class="pokemon">  <h1 id="nome">${pokemonAtual.size.height}</h1><a href="#"><img src="${pokemonAtual.img}" alt="${pokemonAtual.name}"></a></div>`;

}
cardPokemon.innerHTML = cards;
