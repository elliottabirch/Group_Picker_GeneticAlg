
const calcArrangementScore = require('./calcArrangementScore');
const generateNextGeneration = require('./generateNextGeneration');
const generateMutatedArrangement = require('./generateMutatedArrangement');
const generateOffspring = require('./generateOffspring');
const generateRandomGenome = require('./generateRandomGenome');
const genomeToArrangement = require('./genomeToArrangement');

const dummy = require('./organizeDummyData');

let firstGen = [];
let firstGenGenome =[];
let populationSize = 100;

// generate random population
for (var i = 0; i < populationSize; i++) {
  firstGenGenome[i] = generateRandomGenome(dummy);
  firstGen[i] = genomeToArrangement(firstGenGenome[i]);
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
