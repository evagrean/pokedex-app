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

var txt = ' - Wow, that\'s big!';

for (i = 0; i < repository.length; i++) {
  if (repository[i].height > 2.04) {
  document.write(repository[i].name + ' (height: ' + repository[i].height + ')' + txt.bold());
  }
  else {
  document.write('<p>' + repository[i].name + ' (height: ' + repository[i].height + ')' + '<p>');
  }
}
