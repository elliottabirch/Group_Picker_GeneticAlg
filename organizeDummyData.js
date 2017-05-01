const dummy = require('./Genetic_Algo_Stuff');

module.exports = (function (dummy) {
  const disagreementsRE = new RegExp('refuse');
  const agreementsRE = new RegExp('especially');
  return dummy.map(individual => ({
    name: individual.yourName,
    disagreements: Object.keys(individual).filter(name => disagreementsRE.test(individual[name])),
    agreements: Object.keys(individual).filter(name => agreementsRE.test(individual[name])),
  }));
}(dummy));

