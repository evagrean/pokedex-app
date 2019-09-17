// IIFE Immediately Invoked Function Expression
var pokemonRepository = (function() {
  var repository = [];

  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';  // link for loading pokeapi


  function getAll() {
    return repository;
  }

  function add(pokemon) {
    if (typeof pokemon === 'object') { // checking if what's added is object type
      repository.push(pokemon);
  }
    else {
      console.log('only objects can be added!');
      }

  //showDetails function shows pokemon's details after clicking on pokemons name
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function(){
      console.log(item);
    });
  }

// in addListItem: creatd <li> and <button> tags and css-class for <button>
function addListItem(pokemon) {
  var pokelist = document.querySelector('.pokemon-list');
  var listItem = document.createElement('li'); //var for li element that contains button for each Pokemon
  var button = document.createElement('button'); //var for button
  button.innerText = pokemon.name; // pokemon's name on button
  button.classList.add('name-button'); //added class to <button> for styling
  listItem.appendChild(button); // button appended to li element as its child
  pokelist.appendChild(listItem); // li appended to ul as its child
  button.addEventListener('click', function(event){ // added eventListener
  showDetails(pokemon);
  });
}

// loadList function fetches data from the API
function loadList() {
  return fetch(apiUrl).then(function(response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function(item) {
      var pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function(e) {
    console.error(e);
  });
}

function loadDetails(item) {
  var url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function(details) {
    // details are added to item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = Object.keys(details.types);
  }).catch(function(e) {
    console.error(e);
  });
}

return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  showDetails: showDetails,
  loadList: loadList,
  loadDetails: loadDetails
};
})();


pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon){
    addListItem(pokemon);
  });
});



// used filter() function to find specific Pokemon, here example to find Bulbasaur

var findBulbasaur = pokemonRepository.getAll().filter(function(pokemon){
  return pokemon.name === 'Bulbasaur';
});
