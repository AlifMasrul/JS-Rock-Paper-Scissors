let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

/*if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };   
}*/

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  switch (true) {
    case playerMove === "scissors":
      switch (true) {
        case computerMove === "rock":
          result = "You Lose";
      }
      switch (true) {
        case computerMove === "paper":
          result = "You Win";
      }
      switch (true) {
        case computerMove === "scissors":
          result = "Tie";
      }
  }
  switch (true) {
    case playerMove === "paper":
      switch (true) {
        case computerMove === "rock":
          result = "You Win";
      }
      switch (true) {
        case computerMove === "paper":
          result = "Tie";
      }
      switch (true) {
        case computerMove === "scissors":
          result = "You Lose";
      }
  }
  switch (true) {
    case playerMove === "rock":
      switch (true) {
        case computerMove === "rock":
          result = "Tie";
      }
      switch (true) {
        case computerMove === "paper":
          result = "You Lose";
      }
      switch (true) {
        case computerMove === "scissors":
          result = "You Win";
      }
  }

  switch (true) {
    case result === "You Win":
      score.wins = score.wins + 1;
  } switch (true) {
    case result === "You Lose":
      score.losses = score.losses + 1;
  } switch (true) {
    case result === "Tie":
      score.ties = score.ties + 1;
  }



  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}Emoji.png" class="move-icon"> <img src="images/${computerMove}Emoji.png" class="move-icon"> Computer`
}


function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} , Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}