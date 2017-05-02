module.exports = function (arrangement) {
  var score = 0;

  // forEach group in arrangement
  arrangement.forEach( function(group) {
    // take the group score and add it to score
    score += group.score;
  });

  return score;
};
