// IIFE Immediately Invoked Function Expression
var pokemonRepository = (function() {
  var repository = [];

  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';  // link for loading pokeapi

// loadList function fetches data from the API
  function loadList(){
    return fetch(apiUrl).then(function(response){
      return response.json();
    }).then(function(json){
      json.results.forEach(function(item){
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function(e){
      console.error(e);
    })
  }

  function getAll() {
    return repository;
  }

  function add(pokemon) {
    if (typeof pokemon === 'object') { // check if an object is added
      repository.push(pokemon);
    }
    else {
      console.log('only objects can be added!');
      }
    if (Object.keys(pokemon) === ['name', 'height', 'types', 'abilities']) { // validate if keys are as expected
       repository.push(pokemon);
      }
    else {
        console.log('not the right content!');
      }
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

//showDetails function to use in a later Task
function showDetails(pokemon) {
  console.log(pokemon);
}

return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  showDetails: showDetails
};
})()


// forEach Loop function to print details of each Pokemon

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
})

// used filter() function to find specific Pokemon, here example to find Bulbasaur

var findBulbasaur = pokemonRepository.getAll().filter(function(pokemon){
  return pokemon.name === 'Bulbasaur';
});
