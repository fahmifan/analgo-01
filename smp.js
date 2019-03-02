#!/usr/bin/env node

const women = ['amy', 'bertha', 'clare', 'diane', 'erika']
const men = ['victor', 'wyatt', 'xavier', 'yancey', 'zeus']

/**
 * Init value for a 1D array
 * @param {number} len length of the array
 * @param {any} initVal value to assign to each array
 */
const initArray = (len, initVal) => {
    const arr = new Array(len);
    for (let i = 0; i < len; i++) {
        arr[i] = initVal
    }

    return arr;
}

/**
 * wPreferM1OverM check if w prefer m1 over m
 *
 * @param {number[][]} womanPref n*m array of women preference men
 * @param {number} w woman
 * @param {number} m man trying to engange to w
 * @param {number} m1 woman thath engange to w 
 * 
 * @returns {boolean}
 */
function wPreferM1OverM(womanPref, w, m, m1) {
    for (let i = 0; i < womanPref.length; i++) {
        if (womanPref[w][i] === m1) return true;
        if (womanPref[w][i] === m) return false;
    }
}

/**
 * menStableMariage callback
 *
 * @callback mspCallback
 * @param {number} men index 
 * @param {number} woman index
 * @param {number[]} currMenCouple
 */

/**
 * Get array of woman of Stable Mariage Problem 
 * using Gale-Shapely algorithm
 * 
 * @param {number[][]} menPref n*m array of men preference women
 * @param {number[][]} womanPref n*m array of women preference man
 * @param {mspCallback} callback
 *
 * @returns {number[]} it's index is index in men array, & it's value is index in women array
 */
exports.menStableMariage = (menPref, womanPref, callback = () => {}) => {
    // length of array
    const N = men.length;

    // pickedWoman index is index of `men`, 
    // it's value is an index tha will increment to indicate last picked woman 
    // so, value 0 means first (index 0) preferable woman of mensPrefer 
    const pickedWoman = initArray(N, 0);

    // indicate if a index of man is free (-1) or not (>= -1)
    // menCouple index is a man & the value of it is the woman who couple with him
    // value -1 means the man is free else it's the `women` index
    const menCouple = initArray(N, -1);

    // while there is a free man
    while(menCouple.indexOf(-1) !== -1) {
        // pick first free man `m`
        let m = menCouple.indexOf(-1);
        // w is the most preferable woman that hasn't been picked before
        let w = menPref[m][pickedWoman[m]];

        // check is w engage with other man `m1` or not
        let m1 = menCouple.indexOf(w);
        if (m1 === -1) {
            // engage man `m` with woman `w`
            menCouple[m] = w;
        } else {
            // check if man `m` is prefer by woman `w`
            if (wPreferM1OverM(womanPref, w, m, m1)) {
                // mark woman `w` as picked
                pickedWoman[m] += 1;
                // m still free
                menCouple[m] = -1;
            } else {
                // break `m1` with `w`
                menCouple[m1] = -1;
                // engage `m` with `w`
                menCouple[m] = w;
            }
        }

        callback(m, w, menCouple);
    }
    return menCouple;
}

module.exports = exports;
