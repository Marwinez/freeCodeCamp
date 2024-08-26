const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pId = document.getElementById("pokemon-id");
const pName = document.getElementById("pokemon-name");
const pWeight = document.getElementById("weight");
const pHeight = document.getElementById("height");
const pTypes = document.getElementById("types");
const pHP = document.getElementById("hp");
const pAttack = document.getElementById("attack");
const pDefense = document.getElementById("defense");
const pSpAttack = document.getElementById("special-attack");
const pSpDefense = document.getElementById("special-defense");
const pSpeed = document.getElementById("speed");
const pSpriteFront = document.getElementById("sprite-front");
const pSpriteBack = document.getElementById("sprite-back");

const typeColors = {
  "normal": "#a1a1a1",
  "fire": "#e38643",
  "fighting": "#d64123",
  "water": "#4c79bc",
  "flying": "#8fb8e4",
  "grass": "#5d9d3b",
  "poison": "#6d4b97",
  "electric": "#f2c341",
  "ground": "#895229",
  "psychic": "#dc4d79",
  "rock": "#ada984",
  "ice": "#78ccf0",
  "bug": "#95a135",
  "dragon": "#4c60a9",
  "ghost": "#6b426e",
  "dark": "#4e403f",
  "steel": "#72a0b6",
  "fairy": "#72a0b6"
}

const pokemonURL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

const getPokemonDetails = () => {
  /*var soudn = new Audio('pokemooooooooooon.mp3');
  soudn.play();*/
  const pokemon = searchInput.value.toLowerCase();
  fetch(pokemonURL + pokemon).then((res) => res.json()).then((pokeData) => {
    const pokemonDetails = pokeData;
    outputDetails(pokemonDetails);
  })
  .catch((err) => {
    alert("Pokémon not found");
    console.log(err);
  })
}

const outputDetails = (pokeData) => {
  //console.log(pokeData);
  const { height, id, name, sprites, stats, types, weight } = pokeData;

  pName.innerHTML = name.toUpperCase();
  pId.innerHTML = `#${id}`;
  pSpriteFront.innerHTML = sprites.front_default ? 
  `<img src="${sprites.front_default}" id="sprite" class="sprite-img" alt="Sprite front" title="Sprite front" />`:
  `<span>No picture found</span>`;
  pSpriteBack.innerHTML = sprites.back_default ? 
  `<img src="${sprites.back_default}" class="sprite-img" alt="Sprite back" title="Sprite back" />`:
  `<span>No picture found</span>`;
  pWeight.innerText = weight;
  pHeight.innerText = height;
  pHP.innerText = stats.find((el) => el.stat.name === "hp").base_stat;
  pAttack.innerText = stats.find((el) => el.stat.name === "attack").base_stat;
  pDefense.innerText = stats.find((el) => el.stat.name === "defense").base_stat;
  pSpAttack.innerText = stats.find((el) => el.stat.name === "special-attack").base_stat;
  pSpDefense.innerText = stats.find((el) => el.stat.name === "special-defense").base_stat;
  pSpeed.innerText = stats.find((el) => el.stat.name === "speed").base_stat;

  pTypes.innerHTML = "";
  types.forEach((el) => {
    pTypes.innerHTML += `<span class="poke-type" style="background-color: ${typeColors[el.type.name]}">${el.type.name.toUpperCase()}  </span>`;
  })

  searchInput.value = "";
}

searchBtn.addEventListener('click', getPokemonDetails);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getPokemonDetails();
  } 
});
