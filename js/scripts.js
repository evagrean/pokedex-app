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

// forEach Loop function to print details of each Pokemon

repository.forEach(function(repository){
  document.write('<p>' + 'name: ' + repository.name + '<br>');
  document.write('height: ' + repository.height + '<br>');
  document.write('types: ' + repository.types + '<br>');
  document.write('abilities: ' + repository.abilities + '<br>' + '<p>');
})
