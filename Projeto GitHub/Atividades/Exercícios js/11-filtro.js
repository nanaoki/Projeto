function filtrarNum(arr) {
    return arr.filter(element => typeof element === 'number');
  } 

  console.log(filtrarNum([34, 'cygnus', '12', 6, true, 14, 11, 'oi', '18']))