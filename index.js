const calcDisagreement = require('./calcDisagreement');
const calcAgreement = require('./calcAgreement');
const calcGroupSizeScore = require('./calcGroupSizeScore');
const calcArrangementScore = require('./calcArrangementScore');
const generateNextGeneration = require('./generateNextGeneration');
const generateRandomArrangement = require('./generateRandomArrangement');


const dummy = require('./organizeDummyData');

let firstGen = [];

// generate random population
for (var i = 0; i < 100; i++) {
  firstGen[i] = generateRandomArrangement();
}

// form into something useful
firstGen = generatePopulation(firstGen);

// sort by score
firstGen.sort(
  function (a, b) {
    return a.score - b.score;
  },
);

// make gen out of top 2 parents
const nextGen = generateNextGeneration(firstGen[0].genome, firstGen[1].genome);

