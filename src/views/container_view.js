const PubSub = require('../helpers/pub_sub.js');
const StarWarsCharacterView = require('./Star_Wars_Characters_view.js');


const ContainerView = function (container) {
  this.container = container;
};

ContainerView.prototype.bindEvents = function () {
  PubSub.subscribe("StarWarsCharacters:characters-data-loaded", (event) => {
    this.characters = event.detail;
    console.log(`I'm logging the container: ${event.detail}`);
    this.render();
  })
};

ContainerView.prototype.render = function () {
  this.container.innerHTML = '';
  this.characters.forEach((character) => {
    const characterView = new StarWarsCharacterView(this.container, character);
    characterView.render();
    // debugger;
  })
};


module.exports = ContainerView;
