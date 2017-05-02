module.exports = function (arrangement, dummy, callback) {
  return arrangement.map((group) => ({
      members: group.members,
      score: callback(group.members, dummy, 4),
    }));
};
