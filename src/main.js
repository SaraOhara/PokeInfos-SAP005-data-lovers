import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon.slice(0, 10); //arrays
const cardPokemon = document.getElementById("card-pokemon");
let cards = "";
for (var chavePokemon in pokemons) {
    const pokemonAtual = pokemons[chavePokemon];

    cards += `<div class="pokemon">  <h1 id="nome">${pokemonAtual.size.height}</h1><a href="#"><img src="${pokemonAtual.img}" alt="${pokemonAtual.name}"></a></div>`;

}
cardPokemon.innerHTML = cards;

const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});