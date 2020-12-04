import data from './data/pokemon/pokemon.js';
import { filterData, orderData } from './data.js';

const pokemons = data.pokemon.slice(0, 102);
const cardPokemon = document.getElementById("card");

function cardsPokemon() {
  let cards = "";
  pokemons.forEach(arr => {
    const types = arr.type;
    cards +=
      `
      
      <section class="card ${types[0]}">
      <div class="flip" >
     
            <img class="card-image " alt="${arr.name}" src="https://www.serebii.net/pokemongo/pokemon/${arr.num}.png" />
            <h2 class="card-title"> ${arr.num}.${arr.name.toLocaleUpperCase().replace("(FEMALE)", "").replace("(MALE)", "")} </h2>
            <p class="card-subtitle" id="card-subtitle">${arr.size.height} | ${arr.size.weight} <br /> ━━━ <br />${types.join(' | ')} </p>
            
            </section >
            
        </div>`;

  });
  cardPokemon.innerHTML = cards;
}
cardsPokemon();









const search = document.getElementById('filter-name');
search.addEventListener('keyup', function () {
  let pokemons = filterData(data.pokemon, { name: search.value.toLowerCase() });
  document.getElementById('card').innerHTML = "";
  load(pokemons);
})

const order = document.getElementById('select-option');
order.addEventListener('change', function () {
  let pokemons = filterData(data.pokemon, { type: order.options[order.selectedIndex].value });
  document.getElementById('card').innerHTML = "";
  orderData(pokemons);
  load(pokemons);
})

document.getElementById('card').appendChild(card);

