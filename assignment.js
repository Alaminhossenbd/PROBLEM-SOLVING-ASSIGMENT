// feetToMile
function feetToMile(feet) {
  var mile = feet / 5280;
  return mile;
}
var result = feetToMile(5280);
console.log(result);

// woodCalculator
function woodCalculator(chair, table, bed) {
  var chairCount = chair * 1;
  var tableCount = table * 3;
  var bedCount = bed * 5;
  var totalWood = chairCount + tableCount + bedCount;
  return totalWood;
}


var woodResult = woodCalculator(1, 3, 5);
console.log(woodResult);

// brickCalculator
function brickClculator() {

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
console.log(smallestName);