'use strict';

(() => {
const game = () => {

  const result = {
    user: 5,
    SkyNet: 5,
  };

  const results = {
    user: 0,
    SkyNet: 0,
  };

  const getRandom = (one, two) => {
    let randomRes = one + Math.random() * (two - one);
    return Math.floor(randomRes);
  };

  const gameStart = () => {
    const figures = ['камень', 'ножницы', 'бумага'];

    const getRandoms = (one, two) => {
      let randomRes = one + Math.random() * (two - one);
      return Math.floor(randomRes);
    };

    const userPlay = () => {
      let userResult;
      let userItem = prompt(`Введите ${figures}`, '');
      if (userItem) {
        if (userItem === figures[0] || userItem === figures[1] || userItem === figures[2]) {
          userResult = userItem;
        } else {
          alert(`Не верное значение!`);
          return userPlay();
        }
      }
      if (userItem === null) {
        let who = confirm(`Ты уверен`);
        if (who) {
          return alert(`До встречи`);
        }
      }
      return userResult;
    };

    let inputUser = userPlay();
    let userRes = figures.indexOf(inputUser);
    let inputSky = getRandoms(0, 3);
    const winner = () => {

      if (userRes === inputSky) {
        alert('Ничья, давай еще раз!');
        return gameStart();
      }
      if (userRes === 0 && inputSky === 1 || userRes === 1 && inputSky === 2
        || userRes === 2 && inputSky === 0) {
        results.user++;
        alert('Ты выиграл, ходишь первым!');
      } else {
        results.SkyNet++;
        alert('ты проиграл, хожу я!');
      }
    };
    winner();
  };

 gameStart();

  return function start () {

    if (results.user > 0) {
      userPlay();
    } if (results.SkyNet > 0) {
      skyStep();
    }

    function userPlay ()  {
      if (result.SkyNet <= 0 || result.user <= 0) {
        const end = confirm('Продолжим?');
        if (end) {
          return window.MARBL()();
        } else {
          alert(`Skynet: Игра закончена! \nнаш счет: \nКожаный - ${result.user} \nSkyNet - ${result.SkyNet}`);
          return;
        }
      }

      let userResult;
      let userItem = +prompt(`Выбери количество шариков, на которое хочешь сыграть! \nУ тебя ${result.user} шариков!`, '');
      let skyNetResult = Math.round(Math.random()+1);
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

      if (userItem % 2 === 0 && skyNetResult % 2 === 0 || userItem % 2 !== 0 && skyNetResult % 2 !== 0) {
        result.user -= userItem;
        result.SkyNet += userItem;
        alert(`SkyNet:Не верно! Я выбрал ${skyNetResult} шариков! \nнаш счет: \nКожаный - ${result.user} \nSkyNet - ${result.SkyNet}`);
      }
      if (userItem % 2 === 0 && skyNetResult % 2 !== 0 || userItem % 2 !== 0 && skyNetResult % 2 === 0) {
        result.user += userItem;
        result.SkyNet -= userItem;
        alert(`SkyNet:Верно! Я выбрал ${skyNetResult} шариков! \nнаш счет: \nКожаный - ${result.user} \nSkyNet - ${result.SkyNet}`);
      }

      if (userItem === 0) {
        let who = confirm('Уверен?');
        if (who) {
          alert(`Счет: \nКожаный - ${result.user} \nSkyNet - ${result.SkyNet}`);
          return;
        } else {
          return userPlay();
        }
      }

      return skyStep();
    }

    function skyStep () {
      if (result.SkyNet <= 0 || result.user <= 0) {
        const end = confirm('Продолжим?');
        if (end) {
          return window.MARBL()();
        } else {
          alert(`Skynet: Игра закончена! \nнаш счет: \nКожаный - ${result.user} \nSkyNet - ${result.SkyNet}`);
          return;
        };
      }

      let userItem = prompt('Четное или не четное?');
      let skyNetItem = getRandom(1, result.SkyNet);

      if (skyNetItem % 0 === 0 && userItem === 'четное' || skyNetItem % 0 !== 0 && userItem === 'не четное') {
        result.user += skyNetItem;
        result.SkyNet -= skyNetItem;
        alert(`Верно, ты получаешь ${skyNetItem} шариков! \nнаш счет: \nКожаный - ${result.user} \nSkyNet - ${result.SkyNet}`);
      }
      if (skyNetItem % 0 === 0 && userItem === 'не четное' || skyNetItem % 0 !== 0 && userItem === 'четное') {
        result.user -= skyNetItem;
        result.SkyNet += skyNetItem;
        alert(`Не верно, я получаю ${skyNetItem} шариков! \nнаш счет: \nКожаный - ${result.user} \nSkyNet - ${result.SkyNet}`);
      }

      return userPlay();
    }
  };
};

window.MARBL = game;
})();
