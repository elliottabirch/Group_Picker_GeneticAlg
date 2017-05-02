module.exports = function(arrangement, callback) {
  return arrangement.map((group)=>{
    return {
      members: group.members,
      score: callback(group.members),
    };
  });
};