import init from './components/init.js';
import draw from './components/draw.js';
import run from './components/run.js';
import square from './components/square.js';




window.addEventListener('DOMContentLoaded', ()=>{
  const tetris = []; //определяю общее игровое поле
  const tetrisField = document.querySelector('#tetris-field');
  const scoreField = document.querySelector('div.score-field.text-center');
  const color = [1, 2, 3, 4, 5]; //массив цветов игровых фишек
  let timer;
  let score = 0; 
  let flag;
  const startBtn = document.querySelector('button.start');



  //реализация игрового поля в виде столбцов и строк
  init(9, 15, tetris);

  //рисуем игровое поле
  draw(tetris, tetrisField, scoreField, score);

  //рисум стартовый элемент
  square(tetris, color);

  //событие при нажатии кнопки старт
  startBtn.addEventListener('click', run(tetris, tetrisField, scoreField, score, color, flag, timer) );

  //реализация анимациии
  document.onkeydown = e => {
    console.log(e);
    switch (e.code) {
      case 'ArrowRight':
        tetrisRight();
        break;
      case 'ArrowLeft':
        tetrisLeft();
        break;        
    }
    return false;
  };

  function tetrisRight(){ // проверка можем ли двигать (<10 -  можем)
    for(let i = tetris.length -1; i>=0; i--) { //перебор снизу вверх
      for(let j= tetris[i].length - 1; j>=0; j--){ //перебор слева - направо
        if(tetris[i][j] < 10){ //можно ли двигать элемент
          if(tetris[i][j] != 0 && tetris[i][j+1] == 0) { //есть что двигать и справа пусто для перемищения
            //выполняем сдвиг:
            tetris[i][j+1] = tetris[i][j];
            tetris[i][j] = 0;
          }
        }
      }
    }
    draw(tetris, tetrisField, scoreField, score );
  }

  function tetrisLeft() {
    for(let i = tetris.length -1; i>=0; i--) { //перебор снизу вверх
      for(let j= 0; j<tetris[i].length; j++){ //перебор слева - направо
        if(tetris[i][j] < 10){ //можно ли двигать элемент
          if(tetris[i][j] != 0 && tetris[i][j-1] == 0) { //есть что двигать и справа пусто для перемищения
            //выполняем сдвиг:
            tetris[i][j-1] = tetris[i][j];
            tetris[i][j] = 0;
          }
        }
      }
    }
    draw(tetris, tetrisField, scoreField, score );
  }

});