module.exports = function (membersArray, groupSize) {
  if (membersArray.length === groupSize) {
    return 0;
  } else {
    return -1000;
  }
};
