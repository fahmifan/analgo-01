/**
 * Mencari nilai maximum dari suatu array
 * @param {number[]} grades
 */
module.exports = (grades) => {
  let max = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > max) {
      max = grades[i];
    }
  }

  return max;
};
