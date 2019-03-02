#!/usr/bin/env node

const women = ['amy', 'bertha', 'clare', 'diane', 'erika']
const men = ['victor', 'wyatt', 'xavier', 'yancey', 'zeus']

// menPref index relate to the men index
// the value of menPref index is the women index
const menPref = [
    [1, 0, 3, 4, 2],
    [3, 1, 0, 2, 4],
    [1, 4, 2, 3, 0],
    [1, 3, 0, 4, 2],
    [1, 3, 0, 4, 2]
];

// womanPref index relate to the women index
// the value of womanPref is the men index
// means you can get men name like this `men[womanPref[0]]`
const womanPref = [
    [4, 0, 1, 3, 2],
    [2, 1, 3, 0, 4],
    [1, 2, 3, 4, 0],
    [0, 4, 3, 2, 1],
    [3, 1, 4, 2, 0],
];

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

function wPreferM1OverM(w, m, m1) {
    for (let i = 0; i < womanPref.length; i++) {
        if (womanPref[w][i] === m1) return true;
        if (womanPref[w][i] === m) return false;
    }
}

/**
 * Check stable mariage preferences
 * 
 * @returns {number[]} it's index is index in men array, & it's value is index in women array
 */
function checkStability() {
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
    let counter = 0;
    // while there is a free man
    while(menCouple.indexOf(-1) !== -1) {
        // pick first free man `m`
        let m = menCouple.indexOf(-1);
        // console.log('first free man', m);
        // w is the most preferable woman that hasn't been picked before
        let w = menPref[m][pickedWoman[m]];
        console.log('%s picked %s', men[m], women[w]);
        // break;
        // check is w engage with other man `m1` or not
        let m1 = menCouple.indexOf(w);
        if (m1 === -1) {
            // engage man `m` with woman `w`
            menCouple[m] = w;
        } else {
            // check if man `m` is prefer by woman `w`
            if (wPreferM1OverM(w, m, m1)) {
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

        counter++;
        console.log('iterasi %d: [%s]\n', counter, menCouple.toString());
    }

    console.log('menCouple', menCouple);

    return menCouple;
}

function main() {
    menPref.forEach((m, idx) => {
        let wList = '';
        m.forEach((w) => {
            wList += `\t${women[w]}\t`
        })
        console.log(`${men[idx]}\t: ${wList}`)
    })

    console.log('\n')

    womanPref.forEach((wm, idx) => {
        let mList = '';
        wm.forEach((m) => {
            mList += `\t${men[m]}\t`
        })
        console.log(`${women[idx]}\t: ${mList}`)
    })

    const mensCoupleAns = [0, 2, 1, 4, 3];
    const smp = checkStability();
    console.log('smp', smp);
    // test
    console.log(eval(smp.every(s => mensCoupleAns.includes(s))));
}

main();