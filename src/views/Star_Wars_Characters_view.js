const PubSub = require('../helpers/pub_sub.js');

const StarWarsCharacterView = function(container, charactersData) {
  this.characterContainer = container;
  this.charactersData = charactersData;
};

StarWarsCharacterView.prototype.render = function () {
console.log(this.charactersData);
};

module.exports = StarWarsCharacterView;
