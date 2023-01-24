


  function square(tetrisMain, arr) {
    function randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      return rand;
    }
    tetrisMain[0][0] = randomInteger(0, arr.length);
  }


  export default square;