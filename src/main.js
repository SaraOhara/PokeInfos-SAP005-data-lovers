import data from './data/pokemon.js';
import { searchByName, selectType, calcType, orderBy } from './data.js'

const pokemons = data.pokemon.slice(0, 249);
const cardPokemon = document.getElementById("card");


function cardsPokemon(pokemonArray) {
  let cards = "";
  pokemonArray.forEach(pokemonAtual => {
    const types = pokemonAtual.type;
    cards +=
      `<section class="card ${types[0]}">
           
      <img class="card-image " alt="${pokemonAtual.name}" src="https://www.serebii.net/pokemongo/pokemon/${pokemonAtual.num}.png" />
      <h2 class="card-title"> ${pokemonAtual.num}.${pokemonAtual.name.toLocaleUpperCase().replace("(FEMALE)", "").replace("(MALE)", "")} </h2>
      <p class="card-subtitle" id="card-subtitle">${pokemonAtual.size.height} | ${pokemonAtual.size.weight} <br /> ━━━━━━━━━ <br />${types.join(' | ')} </p>
       </section >`;

  });
  cardPokemon.innerHTML = cards;
}

cardsPokemon(pokemons);

// Filtros pro select

const filterSelectType = document.querySelector("#filter-type");

filterSelectType.addEventListener("change", () => {
  const filterType = filterSelectType.value;
  const arrayFiltered = selectType(filterType, pokemons);
  cardsPokemon(arrayFiltered);
  typePercent();
})

//Porcentagem

function typePercent() {
  document.getElementById("aggregate-calculation").innerHTML = "";
  const filterType = document.getElementById("filter-type").value;
  let result = calcType(pokemons, filterType);

  document.getElementById("aggregate-calculation").innerText += `Entre os tipos de Pokemóns selecionado representam ${result}% do total.`
}

// Filtro de ordem select

const filterSelectOrder = document.querySelector("#order-search");

filterSelectOrder.addEventListener("change", (event) => {
  const orderType = event.target.value;
  const arrayOrdered = orderBy(orderType, pokemons);
  cardsPokemon(arrayOrdered);
})

// Filtro por input (texto) de nome

const filterInputType = document.querySelector("#search-input");

filterInputType.addEventListener("change", () => {
  const filterName = filterInputType.value;
  const arrayFiltered = searchByName(filterName, pokemons);
  cardsPokemon(arrayFiltered);
})

filterInputType.addEventListener("keyup", (event) => {

  if (event.keyCode === 13) {
    event.preventDefault();
  }

  const filterName = event.target.value;
  const arrayFiltered = searchByName(filterName, pokemons);
  cardsPokemon(arrayFiltered);

})

