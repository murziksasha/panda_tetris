
  function init(x, y, totalField) {
    // x количество клонок в строке //кол-во столбцов на игровом поле
    // y создаем и заполняем игровое поле
    for (let i=0; i<y; i++){
      totalField[i] = [];
      for(let j = 0; j< x; j++){
        totalField[i][j] = 0; //пустое поле
      }
    }
  }

    export default init;