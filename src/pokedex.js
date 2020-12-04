import data from './data/pokemon/pokemon.js';

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
