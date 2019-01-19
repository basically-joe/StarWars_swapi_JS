const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const StarWarsCharacters = function () {
  // this.data = [];
};

StarWarsCharacters.prototype.getData = function () {
  const url = `https://swapi.co/api/people/`;
  const request = new RequestHelper(url);

  const myPromise = request.get();
  myPromise.then((data) => {
    // this.handleData(data.results);
    PubSub.publish('StarWarsCharacters:characters-data-loaded', data.results);

    /// selector

    PubSub.subscribe('SelectView:Gender-selected', (event) =>{
      // console.log(event);
      this.newSelection(event.detail, data.results)
      // console.log(data.results);
    })

  })
  .catch((err) =>{
    console.error(err);
  });

};



/// selector

StarWarsCharacters.prototype.newSelection = function (gender, dataResults) {
  // console.log(`dataResult equals: ${dataResults}`);
  const wantedGender = gender;
  // debugger;
  const foundCharacters = dataResults.filter((gender) => {
    // debugger;
    if (dataResults.gender === wantedGender) {
      return character;
    }
  })

  PubSub.publish('Models:new-selection-made', foundCharacters);
};

// StarWarsCharacters.prototype.handleData = function (data) {
//   this.data.push(data);
// };



///


module.exports = StarWarsCharacters;
