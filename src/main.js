import data from './data/pokemon/pokemon.js';
import { filterData, orderData } from './data.js';


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