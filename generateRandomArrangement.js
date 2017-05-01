module.exports = function (individuals) {
  var numIndividuals = individuals.length;
  // starting with the number of individuals, find about how many groups we want to form
  var numGroups = Math.ceil(Math.random() * numIndividuals);
  // start an arrangement
  var arrangement = [];
  for ( var i = 0; i < numGroups; i++ ) {
    arrangement.push( { 
      members: [],
      score: 0
    });
  }

  // forEach individual in individuals
    // get the individual's name
    // generate a random number from 0 to numGroups
    // add the name to the randomth element of arrangement
    // 


  // calculate the group score of each group in arrangement
  
  return arrangement;
};
