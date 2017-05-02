module.exports = function (membersArray, groupSize) {
  if (membersArray.length === groupSize - 1) {
    return -20;
  } else if (membersArray.length === groupSize) {
    return 0;
  } else if (membersArray.length === groupSize + 1) {
    return -10;
  } return -1000;
};
