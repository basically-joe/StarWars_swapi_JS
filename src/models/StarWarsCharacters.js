const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const StarWarsCharacters = function () {
  // this.data = data.results;
}

StarWarsCharacters.prototype.getData = function () {
  const url = `https://swapi.co/api/people/`;
  const request = new RequestHelper(url);

  const myPromise = request.get();
  myPromise.then((data) => {
    // this.handleData(data);
    console.log(this.data);
    PubSub.publish('StarWarsCharacters:characters-data-loaded', data.results);



  })
  .catch((err) =>{
    console.error(err);
  });
};

// StarWarsCharacters.prototype.handleData = function (charactersData) {
//     this.data.push(charactersData.results)
// };

///////////////////

// StarWarsCharacters.prototype.handleData = function (characters) {
//
//   const characterNames = this.getNames(characters);
//   const characterHeights = this.getHeights(characters);
//
//   for (let i=0; i<characterNames.length; i++){
//    let individualcharacter = {
//       name: characterNames[i],
//       height: characterHeights[i]
//     }
//     this.data.push(individualcharacter);
//   }
// };
//
// StarWarsCharacters.prototype.getNames = function (characters) {
//   return characters
//   .map(character => character.name)
//
//
// };
//
//
// StarWarsCharacters.prototype.getHeights = function (characters) {
//   return characters
//   .map(character => character.height);
// };

//////////////////////////

module.exports = StarWarsCharacters;
