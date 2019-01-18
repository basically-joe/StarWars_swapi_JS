const PubSub = require('../helpers/pub_sub.js');


const ContainerView = function (container) {
  this.container = container;
};

ContainerView.prototype.bindEvents = function () {
  PubSub.subscribe("StarWarsCharacters:characters-data-loaded", (event) => {
    this.characters = event.detail;
    console.log(`I'm logging the container: ${this.characters}`);
  })
};


module.exports = ContainerView;
