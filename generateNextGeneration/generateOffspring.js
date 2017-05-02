module.exports = function (parentOne, parentTwo, mutationChance) {
  const numberOfGroups = Math.ceil(parentOne.length / 4);
  const mutate = function (number, mutationChance, numberOfGroups) {
    return Math.random() <= mutationChance ?
      Math.round(numberOfGroups * Math.random())
    : number;
  };
  return parentOne.map((number, index) => Math.random() < 0.5 ? mutate(number, mutationChance, numberOfGroups) : mutate(parentTwo[index], mutationChance, numberOfGroups));
};
