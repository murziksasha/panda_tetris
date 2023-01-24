
  function draw(totalField, gameField, scorePlace, score ) {
    let out = '';
    for(let i=0; i<totalField.length; i++ ) {
      for(let j=0; j < totalField.length; j++){
        if(totalField[i][j] == 0){
          out += `<div class="white"></div>`;
        } else if (totalField[i][j] == 1 || totalField[i][j] == 11) {
          out += `<div class="orange"></div>`;
        } else if (totalField[i][j] == 2 || totalField[i][j] == 12) {
          out += `<div class="airbus"></div>`;
        } else if (totalField[i][j] == 3 || totalField[i][j] == 13) {
          out += `<div class="airbus2"></div>`;
        } else if (totalField[i][j] == 4 || totalField[i][j] == 14) {
          out += `<div class="algonia"></div>`;
        } else if (totalField[i][j] == 5 || totalField[i][j] == 15) {
          out += `<div class="alcon"></div>`;
        }
    }
    gameField.innerHTML = out;  //перерисовую игровое поле
    scorePlace.textContent = score; // вывод очков в игре
  }
}

  export default draw;