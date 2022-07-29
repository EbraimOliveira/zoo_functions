const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const specieObject = data.species.find((animals) => animals.name === animal);
  const animalsList = specieObject.residents;
  const animalAges = animalsList.map((anyAnimal) => anyAnimal.age);
  if (animalAges.every((list) => list >= age)) {
    return true;
  }
  return false;
};
// console.log(getAnimalsOlderThan('lions'));

module.exports = getAnimalsOlderThan;

// Implemente a função getAnimalsOlderThan que deve receber uma espécie e uma idade como parâmetro, e então retornar se todos os animais dessa espécie possuem essa idade ou são mais velhos.

// Verifique se todos os animais da espécie passada como parâmetro possuem a idade mínima:

// Os animais devem ter essa idade ou serem mais velhos.
// Retorne um valor booleano.

// O que será testado:

// A função, ao receber uma espécie e uma idade como parâmetros, deve testar se todos os animais desta espécie possuem a idade mínima especificada.
