// 1
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 2
function minArray(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// 3
function lengthOfStrings(arr) {
  let lengths = [];
  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  return lengths;
}

// 4
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

// 5
function mergeArrays(arr1, arr2) {
  let merged = [];
  for (let i = 0; i < arr1.length; i++) {
    merged.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    merged.push(arr2[i]);
  }
  return merged;
}

// 6
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// 7
function positiveNumbers(arr) {
  let positives = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives.push(arr[i]);
    }
  }
  return positives;
}

// 8
function addToElements(arr, value) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + value);
  }
  return newArr;
}

// 9
function splitPosNeg(arr) {
  let pos = [],
    neg = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    } else if (arr[i] < 0) {
      neg.push(arr[i]);
    }
  }
  return { pos, neg };
}

// 10
function stringsToNumbers(arr) {
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    let num = parseFloat(arr[i]);
    if (!isNaN(num)) {
      numbers.push(num);
    }
  }
  return numbers;
}

// 11
function averageArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// 12
function evenOddSplit(arr) {
  let even = [],
    odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return { even, odd };
}

// 13
function removeValue(arr, value) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 14
function squareElements(arr) {
  let squared = [];
  for (let i = 0; i < arr.length; i++) {
    squared.push(arr[i] ** 2);
  }
  return squared;
}

// 15
function doubleElements(arr) {
  let doubled = [];
  for (let i = 0; i < arr.length; i++) {
    doubled.push(arr[i] * 2);
  }
  return doubled;
}

// 16
function removeNullUndefined(arr) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null && arr[i] !== undefined) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

// 17
function capitalizeStrings(arr) {
  let capitalized = [];
  for (let i = 0; i < arr.length; i++) {
    capitalized.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return capitalized;
}

// 18
function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}

// 19
function insertIntoArray(arr, index, ...elements) {
  arr.splice(index, 0, ...elements);
  return arr;
}

// 20.
function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

// 21
function longestString(arr) {
  let longest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

// 22
function joinWithCommas(arr) {
  return arr.join(", ");
}

// 23
function filterNumbers(arr) {
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numbers.push(arr[i]);
    }
  }
  return numbers;
}

// 24
function lastNElements(arr, n) {
  return arr.slice(-n);
}
