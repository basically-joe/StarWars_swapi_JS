const StarWarsCharacters = require('./models/StarWarsCharacters.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const starWarsCharacters = new StarWarsCharacters;
  starWarsCharacters.getData();

});
