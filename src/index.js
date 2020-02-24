document.addEventListener('DOMContentLoaded', () => {
  //YOUR CODE HERE

// DOM queries
  const searchInput = document.querySelector("#pokemon-search-input")
  const pokeFrames = document.querySelectorAll(".pokemon-frame")
  const pokeContainer = document.querySelector("#pokemon-container")

// helper functions
  const switchSprite = () => {
    // if target sprite equals pokemon sprite, flip it
    if (e.target.className === 'toggle-sprite' && e.target.src === pokemon.sprites.front) {
      e.target.src = pokemon.sprites.back
    } else if (e.target.className === 'toggle-sprite' && e.target.src === pokemon.sprites.back) {
      e.target.src = pokemon.sprites.front
    }
  }

  const reRenderPokemon = () => {
    POKEMON.forEach((pokemon) => {
      // clear the pokecontainer
      includedPokemon = []
      // if pokemon includes user input add pokemon to new array
      if (pokemon.name.includes(userInput)) {
        includedPokemon.push(pokemon)
      }
      // itterate through and add each pokemon to the pokemon container
      includedPokemon.forEach((newPokemon) => {
        pokeContainer.innerHTML += `
          <div class="pokemon-card">
            <div class="pokemon-frame">
              <h1 class="center-text">${newPokemon.name}</h1>
              <div class="pokemon-image">
                <img data-id="${newPokemon.id}" data-action="flip" class="toggle-sprite" src="${newPokemon.sprites.front}">
              </div>
            </div>
          </div>
        `
      });
    })
  }


// event listeners
  pokeContainer.addEventListener('click', e => {
    POKEMON.forEach((pokemon) => {
      switchSprite()
    });

  })
  searchInput.addEventListener('input', e => {
    const userInput = searchInput.value;
    // as something is typed only display the pokemon cardds whose name match user input
    // filter the array based on matching names
    // use the filtered array to re-render the list

    // clear innerhtml of pokeContainer
    pokeContainer.innerHTML = ''
    reRenderPokemon()
  })






// inital poke container render
  console.log(pokeContainer);
  POKEMON.forEach((pokemon) => {
    pokeContainer.innerHTML += `
      <div class="pokemon-card">
        <div class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div class="pokemon-image">
            <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
      </div>
    `
  });


})
