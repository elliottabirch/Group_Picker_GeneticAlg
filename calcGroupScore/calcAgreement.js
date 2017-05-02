module.exports = function (organizeDummyData, agreementArray, members) {
  return members.reduce((score, index, i, array) => {
    if (agreementArray.includes(organizeDummyData[index].name)) {
      return score += 1;
    }
    return score;
  }, 0);
};
