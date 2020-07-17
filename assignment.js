// feetToMile
function feetToMile(feet) {
  var mile = feet / 5280;
  return mile;
}
var result = feetToMile(5280);


// woodCalculator
function woodCalculator(chair, table, bed) {
  var chairCount = chair * 1;
  var tableCount = table * 3;
  var bedCount = bed * 5;
  var totalWood = chairCount + tableCount + bedCount;
  return totalWood;
}


var woodResult = woodCalculator(1, 3, 5);


// brickCalculator
function brickClculator(buliding) {

  var firstFloor = 15 * 1000;
  var secondFloor = 12 * 1000;
  var thirdFloor = 10 * 1000;
  var totalFloor = firstFloor + secondFloor + thirdFloor;
  
  return totalFloor;
}




// tinyFriend 
function tinyFriend(names) {
  var smallName = names[0].length
  var smallest = names[0];
  for (var i = 0; i < smallName; i++) {
    var currentName = names[i];
    if (currentName < smallest) {
      smallest = currentName;
    }
  }
  return smallest;
}

var smallestName = tinyFriend(['Rahim', 'Karim', 'Munni', 'Abul', 'Roman']);
