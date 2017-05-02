const calcDisagreement = require('./calcDisagreement');
const calcAgreement = require('./calcAgreement');
const calcGroupSizeScore = require('./calcGroupSizeScore');


module.exports = function (members, organizeDummyData, groupSize) {
  let score = members.reduce((total, name, i) => {
    total += (
    calcDisagreement(organizeDummyData, organizeDummyData[name].disagreements, members.slice(0, i).concat(members.slice(i + 1))) +
    calcAgreement(organizeDummyData, organizeDummyData[name].agreements, members.slice(0, i).concat(members.slice(i + 1))));
    return total;
  }, 0);
  score += calcGroupSizeScore(members, groupSize);
  return score;
};

// input:
// small scale test run


// large scale run run

