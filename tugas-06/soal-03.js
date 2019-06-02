function main() {
  const vertexSize = 8;
  const mtx = [
    [0,1,1,0,0,0,0,0],
		[1,0,1,1,1,0,0,0],
		[1,1,0,0,1,0,1,1],
		[0,1,0,0,1,0,0,0],
		[0,1,1,1,0,1,0,0],
		[0,0,0,0,1,0,0,0],
		[0,0,1,0,0,0,0,1],
		[0,0,1,0,0,0,1,0]
  ];

  const discovered = [];
  for(let i = 0; i < vertexSize; i++) {
    discovered.push(false);
  }

  const output = [];

  //inisialisasi start
  discovered[0] = true;
	output[0] = 1;

  let counter = 1;
  for (let i = 0; i < vertexSize; i++) {
    for (let j = 0; j < vertexSize; j++) {
      if (mtx[i][j] === 1&& discovered[j] === false) {
        output[counter] = j+1;
        discovered[j] = true;
        counter++;
      }
    }
  }

  console.log('>>> BFS');
  let print = ''
  for(let i = 0; i < vertexSize; i++){
    if (i === vertexSize-1) {
      print += output[i];
    } else {
      print += output[i] + "-";
    }
  }
  console.log(print);
}

main();