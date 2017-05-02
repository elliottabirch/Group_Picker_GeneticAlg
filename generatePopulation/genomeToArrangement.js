const calcGroupScore = require('../calcGroupScore');


module.exports = function (genome, dummyData, groupSize) {
  // create a new arrangement
  const arrangement = [];
  const size = Math.max(...genome);
  for (var i = 0; i <= size; i++) {
    arrangement[i] = [];
  }

  // forEach value at key in the genome
  genome.forEach(function (value, key) {
    // add the key to the group at value (in arrangement)
    arrangement[value].push(key);
  });

  return arrangement.map(group => ({
    members: group,
    score: calcGroupScore(group, dummyData, groupSize),
  }));
};
