module.exports = function(genome) {
  // create a new arrangement
  var arrangement = [];
  var size = Math.max(...genome);
  for ( var i = 0; i <= size; i++ ) {
    arrangement.push({
      'members': [],
      'score': 0
    });
  }

  // forEach value at key in the genome
  genome.forEach( function(value, key) {
    // add the key to the group at value (in arrangement)
    arrangement[value].members.push(key);
  });
  
  return arrangement;
};