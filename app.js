function countWords(stringOfWords) {
  
// create an empty object
  let objectCount = {};

// if argument is an empty string
  if (stringOfWords === '') {
   // return an empty object
      return objectCount
  };
  
// split the argument string into an array 
  const strArray = stringOfWords.split(' ');

// iterate over the array
  for (let i = 0; i < strArray.length; i++) {

// declare a variable to avoid confusion when accessing the object
    let currentItem = strArray[i]
    
// if currentItem in object is undefined
    if (objectCount[currentItem] === undefined) {
    // create currentItem in object with a value of 1
      objectCount[currentItem] = 1
    } else {
    // otherwise increment the value of currentItem
      objectCount[currentItem]++;
    }
  }
 // return the object
    return objectCount;
}

var result1 = countWords('ask a bunch get a bunch');
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

var result2 = countWords('');
console.log('should log "{}":', result2);
