module.exports = function (organizeDummyData, agreementArray, members) {
  return members.reduce((score, index) => {
    if (agreementArray.includes(organizeDummyData[index].name)) {
      return score += 1;
    } else {
      return score;
    }
  }, 0);
};