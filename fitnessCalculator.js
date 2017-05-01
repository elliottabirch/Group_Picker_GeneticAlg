const calcDisagreement = require('./fitnessHelpers/calcDisagreement');
const calcAgreement = require('./fitnessHelpers/calcAgreement');
const calcGroupSizeScore = require('./fitnessHelpers/calcGroupSizeScore');
const calcArrangementScore = require('./fitnessHelpers/calcArrangementScore');


//input: 
//small scale test run
var group = {
  members: [],
  score: 0,  //or undefined?
};

//large scale run run
var arrangement = [
  {
    members: [],
    score: 10,
  },
  {
    members: [],
    score: 10,
  },
  {
    members: [],
    score: 10,
  },
  {
    members: [],
    score: 10,
  },
  {
    members: [],
    score: 10,
  },
  {
    members: [],
    score: 10,
  },
  {
    members: [],
    score: 10,
  },
  {
    members: [],
    score: 10,
  }
];
 