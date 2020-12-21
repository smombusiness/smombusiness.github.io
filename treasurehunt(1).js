//set random location for treasure
var treasure = Math.floor(Math.random() * 12)

//set random location from bomb
var bomb = Math.floor(Math.random() * 12)

//when user clicks box, they get a vacuum cleaner, fish or sad cat face
const treasureHunt = (location) => {
  //if location that user clicks is treasure
  if (location===treasure) {
    //then user sees a fish
    document.getElementById(location).innerHTML = "🐟"
  }

  //if the location that the user clicks is a bomb
  //then user sees a vacuum cleaner
  else if (location===bomb) {
    document.getElementById(location).innerHTML = "💀"
  }
  //if location that user clicks is a sad cat
  //then user sees sad cat
  else {
    document.getElementById(location).innerHTML = "😿"
  }

}
// console.log ("treasure",treasure)
// console.log ("treasureHunt", treasureHunt)
// console.log("bomb",bomb)

// const magic8 = () => {
// prompt("Ask your question?")
// var randomNum = Math.floor(Math.random() * 5)
//    if (randomNum === 0) {
//      alert ("Better not tell you now.")
//    } else if (randomNum === 1) {
//      alert ("It is decidedly so.")
//    } else if (randomNum === 2) {
//      alert ("Don’t count on it.")
//    } else if (randomNum === 3) {
//      alert ("Signs point to yes.")
//    } else if (randomNum === 4) {
//      alert ("Outlook not so good.")
//    }
//   }
