// IIFE Immediately Invoked Function Expression
var pokemonRepository = (function() {
    var repository = [
    {
    name: 'Bulbasaur',
    height: 2.04,
    types: ['grass','poison'],
    abilities: 'overgrow'
    },
    {
    name: 'Weedle',
    height: 1.00,
    types: ['bug','poison'],
    abilities: 'shield dust'
    },
    {
    name: 'Jigglypuff',
    height: 1.08,
    types: ['normal', 'fairy'],
    abilities: ['cute charm', 'competitive']
    },
    {
    name: 'Nidoqueen',
    height: 4.03,
    types: ['poison', 'ground'],
    abilities: ['poison point', 'rivalry']
    }
  ];

  function getAll() {
    return repository;
  }

  function add(pokemon) {
    if (typeof pokemon === 'object') {
      repository.push(pokemon);
    }
    else {
      console.log('only objects can be added!');
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
