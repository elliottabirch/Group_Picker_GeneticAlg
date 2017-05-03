const generatePopulation = require('../generatePopulation');
const breedTopTwoParents = require('./breedTopTwoParents.js');
const breedRainbowParents = require('./breedRainbowParents.js');

module.exports = function (population, dummyData, groupSize, mutationChance) {
  var nextGen = [];
  nextGen = breedRainbowParents(population, mutationChance);
  return generatePopulation(nextGen, dummyData, groupSize);
};
