import draw from "./draw.js";

function run(btn, totalField, gameField, scorePlace, score){
  btn.addEventListener('click', (e)=> {
    draw(totalField, gameField, scorePlace, score );
    for(let i = totalField.length -1; i>=0; i--){
      for(let j=0; j < totalField[i].length; j++) {
        if(totalField[i][j] < 10) {
          if(totalField[i][j] != 0) {
            if(i == totalField.length - 1) {
              totalField[i][j] = totalField[i][j] + 10;
            }else if(totalField[i+1][j] == 0) {
              totalField[i+1][j] = totalField[i][j];
              totalField[i][j] = 0;
            }
          }
        }
      }
    }
  });
}

export default run;