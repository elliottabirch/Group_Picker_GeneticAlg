module.exports = function (individuals) {
  var expectedGroupSize = 4;
  var numIndividuals = individuals.length;
  // starting with the number of individuals, find about how many groups we want to form
  var numGroups = Math.ceil(Math.random() * numIndividuals / expectedGroupSize);
  // start a genome
  var genome = [];

  individuals.forEach( function( individual ) {
    // generate a random number from 0 to numGroups
    // add the name to the randomth element of genome
    genome.push( Math.floor(Math.random() * numGroups) );
  });

  return genome;
};
