const generateOffspring = require('./generateOffspring');

module.exports = function (population, mutationChance) {
  var nextGen = [];
  var lastBreeder = Math.floor(0.75 * population.length);
  console.log('population length: ', population.length);
  // Select the top 75% of the population
  for (var i = 0; i < lastBreeder; i++) {
    var parentOne = population[i].genome;
    var parentTwo = population[lastBreeder - i].genome;
    var child = generateOffspring(parentOne, parentTwo, mutationChance);
    var twin = generateOffspring(parentOne, parentTwo, mutationChance);
    nextGen.push( child );
    if ( i < population.length - lastBreeder ) {
      nextGen.push( twin );
    }
  }
  console.log('nextGen length: ', nextGen.length);
  return nextGen;
};
