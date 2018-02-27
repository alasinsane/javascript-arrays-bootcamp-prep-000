var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var myArr = ["1", "2", "3"];

function addElementToBeginningOfArray(arr, element) {
nextArray = [element, ...arr];
return nextArray;
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
arr.unshift(element);
return arr;
}

function addElementToEndOfArray(arr, element) {
nextArray = [...arr, element];
return nextArray;
}

function destructivelyAddElementToEndOfArray(arr, element) {
arr.push(element);
return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}