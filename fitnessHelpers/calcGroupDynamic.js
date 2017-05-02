const calcDisagreement = require('./calcDisagreement');
const calcAgreement = require('./calcAgreement');
const calcGroupSizeScore = require('./calcGroupSizeScore');


module.exports = function (members, organizeDummyData, groupSize) {
  var score = members.reduce((score, name, i) => {
    return score += (
      calcDisagreement(organizeDummyData, organizeDummyData[name].disagreements, members.slice(0, i).concat(members.slice(i + 1))) + 
    calcAgreement(organizeDummyData, organizeDummyData[name].agreements, members.slice(0, i).concat(members.slice(i + 1))));
  }, 0);
  score += calcGroupSizeScore(members, groupSize);
  return score;
};

//input: 
//small scale test run
var group = {
  members: [ /*array of indices*/ ],
  score: 0,  //or undefined?
};


//SCHEMA

var likabilityTax = {
  disagreement: -5,
  neutral: 0,
  agreement: +1
};


//large scale run run

 