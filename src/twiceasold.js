// Escribe una función que calcula
// en cuántos años tendrá el doble de edad el padre
// o cuantos años han pasado desde que tuvo el doble.

export function twiceAsOld(ageDad, ageSon) {
  const ageDifference = ageDad - ageSon;

  if (ageDifference === ageSon) {
    return 0; //la edad del padre ya sería el doble de la del hijo
  }
  return Math.abs(ageDifference - ageSon); //returns the absolute number so there's no negative numbers
}

console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(55, 30));
console.log(twiceAsOld(42, 21));
console.log(twiceAsOld(22, 1));
console.log(twiceAsOld(29, 0));

