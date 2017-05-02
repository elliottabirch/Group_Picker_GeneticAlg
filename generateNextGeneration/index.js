const generateOffspring = require('./generateOffspring');
const generatePopulation = require('../generatePopulation');

module.exports = function (population, dummyData, groupSize, mutationChance) {
  const parentOne = population[0].genome;
  const parentTwo = population[1].genome;
  const nextGen = [parentOne, parentTwo];

  for (var i = 2; i < 99; i++) {
    nextGen[i] = generateOffspring(parentOne, parentTwo, mutationChance);
  }
  return generatePopulation(nextGen, dummyData, groupSize);
};
