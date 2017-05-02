
const generateNextGeneration = require('./generateNextGeneration');
const calcGroupDynamic = require('./fitnessHelpers/calcGroupDynamic');
const generateMutatedArrangement = require('./generateMutatedArrangement');
const generateOffspring = require('./generateOffspring');
const generateRandomGenome = require('./generateRandomGenome');
const genomeToArrangement = require('./genomeToArrangement');

const dummy = require('./organizeDummyData');

let firstGen = [];
let populationSize = 100;

// generate random population
for (var i = 0; i < populationSize; i++) {
  firstGen[i] = genomeToArrangement(generateRandomGenome(dummy));
}

calcGroupDynamic(firsGen);
calcArrangementScore(firstGen);

// form into something useful
firstGen[i] = generatePopulation(firstGen);

// sort by score
firstGen.sort(
  function (a, b) {
    return a.score - b.score;
  },
);

// make gen out of top 2 parents
const nextGen = generateNextGeneration(firstGen[0].genome, firstGen[1].genome);

