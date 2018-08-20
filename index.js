// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  return kittens.concat(name);
}

function prependKitten(name) {
  return kittens.slice(name);
}

function removeLastKitten() {
  return kittens.slice(1, kitten.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1, kittens.length);
}