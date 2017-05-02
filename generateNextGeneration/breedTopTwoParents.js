const generateOffspring = require('./generateOffspring');

module.exports = function (population, mutationChance) {
  const parentOne = population[0].genome;
  const parentTwo = population[1].genome;
  var nextGen = [];

  for (var i = 0; i < 99; i++) {
    nextGen[i] = generateOffspring(parentOne, parentTwo, mutationChance);
  }
  return nextGen;
};
