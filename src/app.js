const StarWarsCharacters = require('./models/StarWarsCharacters.js');
const ContainerView = require('./views/container_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const starWarsCharacters = new StarWarsCharacters;
  starWarsCharacters.getData();

  const container = document.querySelector('#star-wars-characters-container')
  const containerView = new ContainerView(container);
  containerView.bindEvents();

});
