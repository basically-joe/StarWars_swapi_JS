const StarWarsCharacters = require('./models/StarWarsCharacters.js');
const ContainerView = require('./views/container_view.js');
const StarWarsCharacterView = require('./views/Star_Wars_Characters_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const starWarsCharacters = new StarWarsCharacters;
  starWarsCharacters.getData();

  const container = document.querySelector('#star-wars-characters-section')
  const containerView = new ContainerView(container);
  containerView.bindEvents();

});
