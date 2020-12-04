import data from './data/pokemon/pokemon.js';
const pokemons = data.pokemon.slice(0, 102);

const cardPokemon = document.getElementById("card");
data.pokemon.slice(0, 1);
function cardsPokemon() {
  let cards = "";
  pokemons.forEach(arr => {
    const types = arr.type;
    cards +=
      `<div class="card ${types[0]}">
            <img class="card-image " alt="${arr.name}" src="https://www.serebii.net/pokemongo/pokemon/${arr.num}.png" />
            <h2 class="card-title"> ${arr.num}.${arr.name.toLocaleUpperCase().replace("(FEMALE)", "").replace("(MALE)", "")} </h2>
            <p class="card-subtitle" id="card-subtitle">${arr.size.height} | ${arr.size.weight} <br /> ━━━ <br />${types.join(' | ')} </p>
            
            
            
        </div>`;

  });
  cardPokemon.innerHTML = cards;
}
cardsPokemon();
