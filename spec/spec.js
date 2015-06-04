var code = require('./../grader.js');

describe('grades', function () {
  it('Takes in number as an argument and returns a letter grade', function (){
    expect(code.letterGrade(61)).toEqual('D');
  });
});

describe('averageScore', function (){
  it('Takes in an array of grades as an argument and returns the average of the grades', function (){
    expect(code.averageScore([90, 95, 87, 60])).toEqual(83);
  });
});

describe('medianScore', function (){
  it('Takes in an array of grades as an argument and returns the median grade', function (){
    expect(code.medianScore([52,80,80,86,94])).toEqual(80);
  });
});

describe('mode', function (){
  it('Takes in an array and returns the mode of the grades', function (){
    expect(code.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
  });
});
