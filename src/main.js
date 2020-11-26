import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon.slice(0, 50); //arrays
const cardPokemon = document.getElementById("card-pokemon");
let cards = "";
for (var chavePokemon in pokemons) {
    const pokemonAtual = pokemons[chavePokemon];

    cards +=
        `<li class="card">
        <img class="card-image" alt="${pokemonAtual.name}" src="https://www.serebii.net/pokemongo/pokemon/${pokemonAtual.num}.png" />
        <h2 class="card-title"> ${pokemonAtual.num}. ${pokemonAtual.name} </h2>
        <p id="card-subtitle">${pokemonAtual.size.height} | ${pokemonAtual.size.weight} </p>
        </li>`;







}
cardPokemon.innerHTML = cards;

console.log(cards)


    ;