module.exports = function (organizeDummyData, disagreementArray, members) {
  return members.reduce((score, index) => {
    if (disagreementArray.includes(organizeDummyData[index].name)) {
      return score += 5;
    } else {
      return score;
    }
  }, 0);
};
