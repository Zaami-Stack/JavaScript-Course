let gameplayResults = document.getElementById("gamePlay");
    let results = document.getElementById("results");
    let scoreParagraph = document.getElementById("score");

    let score = JSON.parse(localStorage.getItem('score')) || {
      win:0,
      lose:0,
      draw:0
      
    };
    


    function updatedScore() {
      scoreParagraph.innerHTML = `win : ${score.win} lose : ${score.lose} draw : ${score.draw}`;
    }
    function resetButton(){
      localStorage.removeItem('score');
      score = {
      win:0,
      lose:0,
      draw:0
      
    };

    updatedScore();
    results.innerHTML = '';
    gameplayResults.innerHTML = '';


    }
    function GamePlay(playerMove) {
      let result = '';
      let botGameplay1 = botGameplay();
      if (playerMove === 'Rock') {
        if (botGameplay1 === 'Rock') {
          result = 'Draw';
        } else if (botGameplay1 === 'Paper') {
          result = 'Lose';


        } else {
          result = 'Win'
        }
      } else if (playerMove === 'Paper') {
        if (botGameplay1 === 'Rock') {
          result = 'Win';

        } else if (botGameplay1 === 'Paper') {
          result = 'Draw';
        } else {
          result = 'Lose';
        }

      }else {
        if (botGameplay1 === 'Rock') {
          result = 'Lose';
        } else if (botGameplay1 === 'Paper') {
          result = 'Win';
        } else {
          result = 'Draw';
        }
      }

      if (result === 'Win') {
        score.win ++;
      } else if (result === 'Lose') {
        score.lose ++;

      } else {
        score.draw ++;
      }
      
      localStorage.setItem('score',JSON.stringify(score));
      results.innerHTML = result;
      gameplayResults.innerHTML = `
         You 
        <img src="imgs/${playerMove}-emoji.png" class="moves">
        <img src="imgs/${botGameplay1}-emoji.png" class="moves">
         Bot

      `;
      updatedScore();

      
      
      

    }

    

    function botGameplay(){
      let botMove = '';
      let randomNumber = Math.random();
      if (randomNumber > 0 && randomNumber <= 1/3) {
        botMove = 'Rock';
      } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
        botMove = 'Paper';
      } else {
        botMove = 'Scissors'
      }

      return botMove;
    }


    updatedScore();