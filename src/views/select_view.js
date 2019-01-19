const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {

  PubSub.subscribe('StarWarsCharacters:characters-data-loaded', (event) =>{
    const allCharacters = event.detail;
    const genders = allCharacters.map((character) => {return character.gender})
    const uniqueCharacter = [...new Set(genders)];
    this.populate(uniqueCharacter);
  })

  this.element.addEventListener('change', (event) =>{
    const selectedGender = event.target.value;
    PubSub.publish('SelectView:Region-selected', selectedGender);
  })
};

SelectView.prototype.populate = function (allCharactersData) {
  allCharactersData.forEach((character) =>{
    const option = document.createElement("option");
    option.textContent = character;
    option.value = character;
    this.element.appendChild(option);
  })
};

module.exports = SelectView;
