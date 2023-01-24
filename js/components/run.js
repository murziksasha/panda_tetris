import draw from "./draw.js";
import square from './square.js';

function run(totalField, gameField, scorePlace, score, color, flag, timer){
  timer = setTimeout(()=>{
    draw(totalField, gameField, scorePlace, score );
    flag = false;
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
      //рисуем игровой блок
      if (flag) square(totalField, color);
      run(totalField, gameField, scorePlace, score, color, flag, timer)
  }, 400);
  
}

export default run;