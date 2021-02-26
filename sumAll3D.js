let tab = [
    [
      [1, 7, 3],
      [11, 17, 7],
      [-3, -5],
      [5, 13],
    ],
    [
      [2, 4, 6, 8, 10],
      [1, 3, 5],
    ],
    [[0]],
    [[0], [1], [2], [1]],
  ];

  let nbUsers = 0
for (let i = 0; i < tab.length; ++i) {


    for(let j = 0; j < tab[i].length; j++){
       

        for(let e = 0; e < tab[i][j].length; e++){
            nbUsers += tab[i][j][e]
        }
    
    }


}
console.log(`nb users = ${nbUsers}`)


// console.log(tab[0].length)