function displayWordSoFar(word, guesses) {
  // WRITE ME
  let guessedWord = "";
  let isGuessed = false;
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < guesses.length; j++) {
      if (word[i] === guesses[j]) {
        guessedWord = guessedWord + guesses[j]
        isGuessed = true
      }
    }
    if (isGuessed === false) {
      guessedWord = guessedWord + "_"
    }
    isGuessed = false
  }
  /*console.log(numberOfLetters)*/
  return guessedWord
}

function isGameWon(word, guesses) {
  let hasWon = false
  if (word === displayWordSoFar(word, guesses)) {
    hasWon = true
  }
  return hasWon
}

function isGameLost(counter) {
  let hasLost = false
  if (counter >= 7) {
    hasLost = true
    drawGallows(counter)
  }
  return hasLost
}

function countWrongGuesses(wordArray, guesses) {
  let counter = 0;
  for (let i = 0; i < guesses.length; i++) {
    if (wordArray.includes(guesses[i])) {
      counter;
    } else {
      counter++;
    }
  }
  return counter
}

function drawGallows(counter) {
  if (counter === 1){
    console.log(`
    |
    |
    |
    |
    |
    ===========`)
  } else if (counter === 2) {
    console.log(`
    ___________
    |
    |
    |
    |
    |
    ===========`)
  } else if (counter === 3) {
    console.log(`
    ___________
    | /
    |/
    |
    |
    |
    ===========`)
  } else if (counter === 4) {
    console.log(`
    ___________
    | /      |
    |/
    |
    |
    |
    ===========`)
  } else if (counter === 5) {
    console.log(`
    ___________
    | /      |
    |/       o
    |        O
    |
    |
    ===========`)
  } else if (counter === 6) {
    console.log(`
    ___________
    | /      |
    |/      _o_
    |        O
    |
    |
    ===========`)
  } else if (counter === 7) {
    console.log(`
    ___________
    | /      |
    |/      _o_
    |        O
    |       / \\
    |
    ===========`)
  }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  countWrongGuesses: countWrongGuesses,
  drawGallows: drawGallows,
};
