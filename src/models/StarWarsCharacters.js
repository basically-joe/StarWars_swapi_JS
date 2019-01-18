const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const StarWarsCharacters = function () {
  this.data = [];
}

StarWarsCharacters.prototype.getData = function () {
  const url = `https://swapi.co/api/people/`;
  const request = new RequestHelper(url);

  const myPromise = request.get();
  myPromise.then((data) => {
    this.handleData(data);
    PubSub.publish('StarWarsCharacters:characters-data-loaded', this.data);

    // console.log(data);

  })
  .catch((err) =>{
    console.error(err);
  });
};


StarWarsCharacters.prototype.handleData = function (charactersData) {
    this.data.push(charactersData)
};


module.exports = StarWarsCharacters;
