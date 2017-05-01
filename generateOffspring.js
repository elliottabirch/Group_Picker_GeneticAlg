module.exports = function (parentOne, parentTwo) {
  return parentOne.map((val, index) => Math.random() < 0.5 ? val : parentTwo[index]);
};
