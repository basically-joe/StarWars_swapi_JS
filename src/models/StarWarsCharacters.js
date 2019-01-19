const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const StarWarsCharacters = function () {

}

StarWarsCharacters.prototype.getData = function () {
  const url = `https://swapi.co/api/people/`;
  const request = new RequestHelper(url);

  const myPromise = request.get();
  myPromise.then((data) => {
    PubSub.publish('StarWarsCharacters:characters-data-loaded', data.results);

  /// selector

    PubSub.subscribe('SelectView:Gender-selected', (event) =>{
  console.log(event);
  this.newSelection(event.detail)
})

///

  })
  .catch((err) =>{
    console.error(err);
  });
};

  /// selector

StarWarsCharacters.prototype.newSelection = function (gender) {
  const wantedGender = gender;
  const foundGenders = data.results.filter((gender) => {
    if (data.results.gender === wantedGender) {
      return gender;
    }
  })

  PubSub.publish('Models:new-selection-made', foundGenders);
};

///


module.exports = StarWarsCharacters;
