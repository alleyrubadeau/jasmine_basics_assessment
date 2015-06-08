module.exports={


letterGrade: function (testScore){
    if(testScore>=90){
      return 'A';
    }
    if(testScore>=80 && testScore<=89){
      return 'B';
    }
    if(testScore>=70 && testScore<=79){
      return 'C';
    }
    if(testScore>=60 && testScore<=69){
      return 'D';
    }
    if(testScore<=59){
      return 'F';
      }
  },

  averageScore: function (array){
    result=0;
    for(i=0; i<array.length; i++){
      result=result + array[i]/array.length;
    }
    return result;
  },

  medianScore: function (array){
    array.sort();

    var half=Math.floor(array.length/2);

    if(array.length % 2){
      return array[half];
    }
    else{
      return (array[half-1] + array[half])/2;
    }
  },

  modeScore: function (arr){
      var object={};
      var max=0;

    for(var i = 0; i < arr.length; i++){
      if (object[arr[i]]==null) {
        object[arr[i]]=0;
      }
        else{
          object[arr[i]]++;
          if(object[arr[i]]>max){
            max=arr[i];
          }
        }
      }
      return max;
    }

};
