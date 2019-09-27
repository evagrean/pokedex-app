// IIFE Immediately Invoked Function Expression
var pokemonRepository = (function() {
  var repository = [];

  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';  // link for loading pokeapi


  function getAll() {
    return repository;
  }

  function add(pokemon) {
    if (typeof pokemon === 'object') { // checking if what's added is typeof object s
      repository.push(pokemon);
  }
    else {
      console.log('only objects with predetermined keys can be added!');
      }
  }

// in addListItem: created <li> and <button> tags and css-class for <button>
function addListItem(pokemon) {
  var pokelist = document.querySelector('.pokemon-list');
  var listItem = document.createElement('li'); //var for li element that contains button for each Pokemon
  var button = document.createElement('button'); //var for button
  button.innerText = pokemon.name[0].toUpperCase()+pokemon.name.slice(1); // pokemon's name on button
  button.classList.add('name-button'); //added class to <button> for styling
  listItem.appendChild(button); // button appended to li element as its child
  pokelist.appendChild(listItem); // li appended to ul as its child
  addEventListenerButton(button, pokemon);
}

function addEventListenerButton(button, pokemon) {
  button.addEventListener('click', function(event){
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

//showDetails function shows pokemon's details after clicking on pokemons name
function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function(){
    showModal(item);
    console.log(item);
  });
}

// Create a modal that shows pokemons details
function showModal(item){
  var $modalContainer = document.querySelector('#modal-container');

  // Clear all existing modal content
  $modalContainer.innerHTML = '';

  // Create div element holding the modal content
  var modal = document.createElement('div');
  modal.classList.add('modal');

  // Add pokemon name as modal content
  var nameElement = document.createElement('h1');
  nameElement.innerText = item.name[0].toUpperCase()+item.name.slice(1);

  // Add img as modal content
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', item.imageUrl);
  imageElement.classList.add('modal-img');

  // Add pokemon's height and types as modal content
  var heightElement = document.createElement('p');
  heightElement.innerText = 'Height: ' + item.height;
  var typesElement = document.createElement('p');
  typesElement.innerText = 'Types: ' + item.types['0', '1'];

  // Add closing button for modal
  var closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'X';
  closeButtonElement.addEventListener('click', hideModal);

  // Abbending modal and its content to page
  modal.appendChild(closeButtonElement);
  modal.appendChild(nameElement);
  modal.appendChild(imageElement);
  modal.appendChild(heightElement);
  modal.appendChild(typesElement);
  $modalContainer.appendChild(modal);

  $modalContainer.classList.add('is-visible');

}

// Hides Modal when clicked on closing button [see eventListener]
function hideModal(){
  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.classList.remove('is-visible');
}

// EventListener that hides modal when pressing esc
window.addEventListener('keydown', (e) => {
  var $modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')){
    hideModal();
  }
});

// EventListener that hides modal when clicking outside
var $modalContainer = document.querySelector('#modal-container');
$modalContainer.addEventListener('click', (e) => {
  var target = e.target;
  if (target === $modalContainer) { // only closed when user directly clicks on overlay
    hideModal();
  }
});

return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  showDetails: showDetails,
  loadList: loadList,
  loadDetails: loadDetails,
  showModal: showModal,
  hideModal: hideModal
};
})();


pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});




// used filter() function to find specific Pokemon, here example to find Bulbasaur

var findBulbasaur = pokemonRepository.getAll().filter(function(pokemon){
  return pokemon.name === 'Bulbasaur';
});
