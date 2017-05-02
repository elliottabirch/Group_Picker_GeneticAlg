const generateMutatedArrangement = require('./generateMutatedArrangement');
const generateOffspring = require('./generateOffspring');

module.exports = function (population) {
  const parentOne = population[0].genome;
  const parentTwo = population[1].genome;
  const nextGen = [parentOne, parentTwo];

  for (var i = 2; i < 98; i++) {
    nextGen[i] = generateOffspring(parentOne, parentTwo);
  }

  for (var i = 80; i < 98; i++) {
    nextGen[i] = generateMutatedArrangement(nextGen[i]);
  }

  return nextGen;
};
