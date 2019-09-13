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
    repository.push(pokemon);
  }
// in addListItem: creatd <li> and <button> tags and css-class for <button>
  function addListItem(pokemon) {
    var pokelist = document.querySelector('.pokemon-list');
    var listItem = document.createElement('li');
    pokelist.appendChild(listItem);
    var button = document.createElement('button');
    listItem.appendChild(button);
    button.innerText = pokemon.name;
    button.classList.add('name-button');
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})()


// forEach Loop function to print details of each Pokemon

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
})
