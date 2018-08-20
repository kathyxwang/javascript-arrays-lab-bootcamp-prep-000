// Add your functions and code here
function destructivelyAppendKitten(name) {
  name.push("kitten");
  return name;
}

function destructivelyPrependKitten(name) {
  name.shift();
  return name;
}

function destructivelyRemoveLastKitten(name) {
  name.pop();
  return name;
}

function destructivelyRemoveFirstKitten(name) {
  name.unshift();
  return name;
}