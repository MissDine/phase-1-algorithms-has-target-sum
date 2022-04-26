function hasTargetSum(array, target) {
  let val = [];
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j  < array.length; j++){
      if(array[i] + array[j] === target){
        val.push(true)
      }
    }
  }
  if(val[0] === true){
    return true
  } else {
    return false
  }
}

/* 
  Write the Big O time complexity of your function here
  two for loops
  O(n^2)
*/

/* 
  Add your pseudocode here
 make a function
 loop through the items first
  for ecah loop loop the items again and check if any other number added to it = target
  if true return true
  else return false
*/

/*
  Add written explanation of your solution here
  function hasTargetSum(array, target) {  // create a function
  let val = []; // create an empty arra
  for(let i = 0; i < array.length; i++){ loop through the array
    for(let j = i + 1; j  < array.length; j++){ // for each of above loops loop again
      if(array[i] + array[j] === target){ // check whether the two numbers adds up to the target
        val.push(true) // push a value = true if one of the numbers exists
      }
    }
  }
  if(val[0] === true){ //check if the value at index 0 is true
    return true // return true
  } else { 
    return false  // return false
  }
}
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;