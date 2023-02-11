'use strict';

(() => {

const game = () => {
  const result = {
    user: 5,
    SkyNet: 5,
  };

  return function start () {
    const userPlay = () => {
      let userResult;
      let userItem = +prompt(`Выбери количество шариков, на которое хочешь сыграть! \nУ тебя ${result.user} шариков!`, '');
      if (Number.isNaN(userItem)) {
        alert('Ты ввел не корректное значение');
        return userPlay();
      }
        if (userItem <= result.user && userItem <= result.SkyNet) {
          userResult = userItem;
        } else {
          alert('У тебя нет столько шариков');
          return userPlay();
        }
      if (userItem === 0) {
        let who = confirm('Сдулся кожаный?=))');
        console.log(who)
        if (who) {
          alert(`Счет: \nКожаный - ${result.user} \nSkyNet - ${result.SkyNet}`);
          return;
        } else {
          return userPlay();
        }
      }
      return userResult;
    };

    const skyNetPlay = () => {
      let skyNetResult = Math.round(Math.random());
      return skyNetResult;
    }

     skyNetPlay()

    let choiceUser = userPlay();
    let choiceSkyNet = skyNetPlay();

    const winner = () => {
      if (choiceUser % 2 === 0 && choiceSkyNet % 2 === 0) {
        result.user -= choiceUser;
        result.SkyNet += choiceUser;
        alert(`Skynet: Ты неудачник - я выбрал четное! \nнаш счет: \nКожаный - ${result.user} \nSkyNet - ${result.SkyNet}`);
      }
      if (choiceUser % 2 !==0 && choiceSkyNet % 2 !== 0) {
        result.user -= choiceUser;
        result.SkyNet += choiceUser;
        alert(`Skynet: Ты неудачник - я выбрал не четное! \nнаш счет: \nКожаный - ${result.user} \nSkyNet - ${result.SkyNet}`);
      }
      if (choiceUser % 2 === 0 && choiceSkyNet % 2 !== 0) {
        result.user += choiceUser;
        result.SkyNet -= choiceUser;
        alert(`Skynet: Ты все равно неудачник - я выбрал не четное! \nнаш счет: \nКожаный - ${result.user} \nSkyNet - ${result.SkyNet}`);
      }
      if (choiceUser % 2 !== 0 && choiceSkyNet % 2 === 0) {
        result.user += choiceUser;
        result.SkyNet -= choiceUser;
        alert(`Skynet: Ты все равно неудачник - я выбрал четное! \nнаш счет: \nКожаный - ${result.user} \nSkyNet - ${result.SkyNet}`);
      }
      if (result.SkyNet === 0 || result.user === 0) {
        alert(`Skynet: Игра закончена! \nнаш счет: \nКожаный - ${result.user} \nSkyNet - ${result.SkyNet}`);
        return choiceUser = false;
      }
    };

    winner();

    if (choiceUser) {
      return start();
    }
  };
};

window.MARBL = game;
})();
