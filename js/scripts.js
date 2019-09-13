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

  return {
    getAll: getAll,
    add: add
  };
})()

// belongs to list of Pokemon names

var $unorderedPokemonList = document.querySelector('ul');

// forEach Loop function to print details of each Pokemon

pokemonRepository.getAll().forEach(function(pokemonList) {
  var listItem = document.createElement('li');
  var button = document.createElement('button');
  button.innerText = pokemonList.name;
})
