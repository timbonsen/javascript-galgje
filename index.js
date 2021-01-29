const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost, countWrongGuesses, drawGallows } = require("./gamelogic");

function game(word, guesses) {
  console.log("Deze letters heb je tot nu toe geraden: ", guesses);
  console.log(displayWordSoFar(word, guesses))

  const letter = question("Raad een letter: ");
  const wordToArray = word.split("");

  // voeg de geraden letter toe aan de array met guesses
  if (guesses.includes(letter)) {
    console.log("Je hebt deze letter al geraden, probeer opnieuw")
  } else if (letter.length == 1) {
    guesses.push(letter);
  } else if (letter.length < 1) {
    console.log("Je hebt geen letter ingevuld, probeer opnieuw")
  } else  if (letter.length > 1) {
    console.log("Je hebt meer dan 1 letter ingevuld, probeer opnieuw")
  }

  // check of de speler heeft gewonnen of verloren
  let counter = countWrongGuesses(wordToArray, guesses)
  console.log("Je hebt al " + counter + " letters verkeerd geraden!")
  if (isGameWon(word, guesses) === true) {
    console.log("Gefeliciteerd, je hebt het woord geraden!")
    return
  } else if (isGameLost(counter) === true) {
    console.log("Helaas, je hebt het woord niet op tijd geraden.")
    return
  }
  drawGallows(counter)


  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);
