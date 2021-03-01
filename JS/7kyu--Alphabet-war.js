function alphabetWar(fight) {
    let lleft = {'w':4, 'p':3, 'b': 2, 's': 1}
    let lright = {'m':4, 'q':3, 'd': 2, 'z': 1}
    let sleft = 0, sright = 0
    for (let item of fight) {
      if (lleft[item]) sleft += lleft[item]
      if (lright[item]) sright += lright[item]
    }
    if (sleft > sright) return 'Left side wins!'    
    if (sleft < sright) return 'Right side wins!'
    return "Let's fight again!";
 }