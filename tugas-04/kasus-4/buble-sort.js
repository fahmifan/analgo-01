exports.bubleSort = (arr) => {
  const cpArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (cpArr[j] > cpArr[i]) {
        // swap
        let temp = cpArr[j];
        cpArr[j] = cpArr[i];
        cpArr[i] = temp;
      }
    }
  }

  return cpArr;
}

module.exports = exports;
