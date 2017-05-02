module.exports = function (arrangement) {
  const percentMutation = 0.10;
  const numberOfGroups = Math.ceil(arrangement.length / 4);
  return arrangement.map((number) => {
    if (Math.random() <= percentMutation) {
      return Math.round(numberOfGroups * Math.random());
    }
    return number;
  });
};

