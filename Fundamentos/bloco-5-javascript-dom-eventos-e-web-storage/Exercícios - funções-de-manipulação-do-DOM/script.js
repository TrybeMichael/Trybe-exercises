function changeText() {
  let element = document.getElementsByTagName("p")[1];
  element.innerText = "lorem";
}
changeText();

function changeSquareToGreen() {
  let borderSquare = document.getElementsByClassName("main-content")[0];
  borderSquare.style.background = "rgb(76,164,109)";
}
changeSquareToGreen();

function changeSquareToWhite() {
  let centerSquare = document.getElementsByClassName("center-content")[0];
  centerSquare.style.background = "white";
}
changeSquareToWhite();

function correcTitle() {
  let mainTitle = document.getElementsByTagName("h1")[0];
  mainTitle.innerHTML = "Exercício 5.1 - JavaScript";
}
correcTitle();

function upperCase() {
  let firstParagraph = document.getElementsByTagName("p")[0];
  firstParagraph.innerText = firstParagraph.innerText.toUpperCase();
}
upperCase()

function showParagraphs() {
  let printParagraphs = document.getElementsByTagName('p');
  for (let index = 0; index < printParagraphs.length; index += 1) {
    console.log(printParagraphs[index].innerHTML);
  }
}
showParagraphs();