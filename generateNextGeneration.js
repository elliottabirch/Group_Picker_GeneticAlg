const generateMutatedArrangement = require('./generateMutatedArrangement');
const generateOffspring = require('./generateOffspring');

module.exports = function (population) {
  const parentOne = population[0];
  const parentTwo = population[1];
  const nextGen = [parentOne, parentTwo];

  for (var i = 2; i < 98; i++) {
    nextGen[i] = generateOffspring(parentOne, parentTwo);
  }

  for (var i = 80; i < 100; i++) {
    nextGen[i] = generateMutatedArrangement(nextGen(i));
  }

  return nextGen;
};
