
const generateNextGeneration = require('./generateNextGeneration');
const generateRandomGenome = require('./generateRandomGenome');
const generatePopulation = require('./generatePopulation');
const calcDisagreement = require('./calcGroupScore/calcDisagreement');
const calcAgreement = require('./calcGroupScore/calcAgreement');
const calcGroupSizeScore = require('./calcGroupScore/calcGroupSizeScore');
const fs = require('fs');


const dummy = require('./organizeDummyData');

const write = function (gen) {
  fs.appendFile('solution.txt', (function (gen) {
    let results = `${gen[0].score}\n`;
    const groups = gen[0].arrangement.map(group => group.members.map(index => [dummy[index].name]));
    groups.forEach((group, index) => {
      results += `${index}. ${group}\n`;
    });
    return results;
  }(gen)));
};

const log = function (gen) {
  console.log(gen[0].arrangement.map((group) => {
    const members = group.members.map(index => [dummy[index].name, calcDisagreement(dummy, dummy[index].disagreements, group.members), calcAgreement(dummy, dummy[index].agreements, group.members)]);
    return ({
      agreements: members.reduce((accum, group) => accum + group[2], 0),
      disagreements: members.reduce((accum, group) => accum + group[1], 0),
    });
  }), gen[0].score);
  console.log(gen[1].arrangement.map((group) => {
    const members = group.members.map(index => [dummy[index].name, calcDisagreement(dummy, dummy[index].disagreements, group.members), calcAgreement(dummy, dummy[index].agreements, group.members)]);
    return ({
      agreements: members.reduce((accum, group) => accum + group[2], 0),
      disagreements: members.reduce((accum, group) => accum + group[1], 0),
    });
  }), gen[1].score);
};

const calculate = function () {
  let generation = [];
  const populationSize = 25;


  // generate random population
  for (let i = 0; i < populationSize; i++) {
    generation[i] = generateRandomGenome(dummy);
  }

  generation = generatePopulation(generation, dummy, 4);

  for (let gen = 0; gen < 5000; gen++) {
  // console.log(nextGen[0].score, nextGen[0].score);
    generation = generateNextGeneration(generation, dummy, 4, 0.2);
  }


  write(generation);
};

for (let i = 0; i < 4; i++) {
  calculate();
}
