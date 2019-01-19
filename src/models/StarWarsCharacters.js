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
    PubSub.publish('StarWarsCharacters:characters-data-loaded', data.results);
  })
  .catch((err) =>{
    console.error(err);
  });
};



module.exports = StarWarsCharacters;
