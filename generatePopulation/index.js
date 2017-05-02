const genomeToArrangement = require('./genomeToArrangement');
const calcArrangementScore = require('./calcArrangementScore');

module.exports = function (population, dummyData, groupSize) {
  return population.map(genome => genomeToArrangement(genome, dummyData, groupSize)).map((arrangement, index) => ({
    arrangement,
    score: calcArrangementScore(arrangement),
    genome: population[index],
  })).sort((a, b) => b.score - a.score);
};
