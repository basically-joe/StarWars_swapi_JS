const StarWarsCharacters = require('./models/StarWarsCharacters.js');
const ContainerView = require('./views/container_view.js');
const StarWarsCharacterView = require('./views/Star_Wars_Characters_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  /// selector

  const selector = document.querySelector('select#star-wars-character-select');
  const regionDropdown = new SelectView(selector);
  regionDropdown.bindEvents();

  ///

  const container = document.querySelector('#star-wars-characters-section')
  const containerView = new ContainerView(container);
  containerView.bindEvents();

  const starWarsCharacters = new StarWarsCharacters;
  starWarsCharacters.getData();

});
