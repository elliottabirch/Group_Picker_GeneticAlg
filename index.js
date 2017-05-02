
const generateNextGeneration = require('./generateNextGeneration');
const calcGroupDynamic = require('./fitnessHelpers/calcGroupDynamic');
const generateRandomGenome = require('./generateRandomGenome');
const genomeToArrangement = require('./genomeToArrangement');
const updateGroupScores = require('./updateGroupScores');
const calcArrangementScore = require('./calcArrangementScore');

const dummy = require('./organizeDummyData');

let firstGen = [];
const firstGenGenome = [];
const populationSize = 100;

const finalizePopulation = function (firstGenGenome) {
  return firstGenGenome.map(genome => genomeToArrangement(genome)).map((arrangement, index) => {
    const updatedArrangement = updateGroupScores(arrangement, dummy, calcGroupDynamic);
    return {
      arrangement: updatedArrangement,
      score: calcArrangementScore(updatedArrangement),
      genome: firstGenGenome[index],

    };
  }).sort((a, b) => b.score - a.score);
};
// generate random population
for (var i = 0; i < populationSize; i++) {
  firstGenGenome[i] = generateRandomGenome(dummy);
}

firstGen = finalizePopulation(firstGenGenome);
// console.log(firstGen);
// make gen out of top 2 parents
let nextGen = firstGen;
for (var i = 0; i < 1000; i++) {
  // console.log(nextGen[0].score, nextGen[0].score);
  nextGen = generateNextGeneration(nextGen);
  nextGen = finalizePopulation(nextGen);
}

const log = function (gen) {
  console.log(gen[0].arrangement.map(group => ({
    score: group.score,
    members: group.members.map(index => dummy[index].name),
  })));
};

log(nextGen);
