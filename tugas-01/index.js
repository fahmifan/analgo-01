#!/usr/bin/env node

const { menStableMariage } = require('./smp');

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

const coupleToString = (w, m) => `{ ${men[m]}, ${women[w] || '_'} }`;

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

    console.log('\n');

    const mensCoupleAns = [0, 2, 1, 4, 3];
    let iter = 0;
    const smp = menStableMariage(menPref, womanPref, (m, w, currMenCouple) => {
        console.log('[%d] %s pick %s', iter, men[m], women[w]);

        const couple = currMenCouple.map(coupleToString);
        console.log('[%s]\n', couple.toString())

        iter++;
    });
    // test
    console.log('result >>>')
    console.log('Is couple stable ? ', eval(smp.every(s => mensCoupleAns.includes(s))));
    const couple = smp.map(coupleToString);
    console.log('[%s]\n', couple.toString())
}

main();