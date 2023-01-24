import init from './components/init.js';
import draw from './components/draw.js';
import square from './components/square.js';
import run from './components/run.js';




window.addEventListener('DOMContentLoaded', ()=>{
  const tetris = []; //определяю общее игровое поле
  const tetrisField = document.querySelector('#tetris-field');
  const scoreField = document.querySelector('div.score-field.text-center');
  const color = [1, 2, 3, 4, 5]; //массив цветов игровых фишек
  let timer;
  let score = 0; 
  const startBtn = document.querySelector('button.start');



  //реализация игрового поля в виде столбцов и строк
  init(9, 15, tetris);

  //рисуем игровое поле
  draw(tetris, tetrisField, scoreField, score );

  //рисуем игровой блок
  square(tetris, color);

  //перерисовывем компонент рандом цвет
  draw(tetris, tetrisField, scoreField, score );

  //событие при нажатии кнопки старт
  run(startBtn, tetris, tetrisField, scoreField, score);


});