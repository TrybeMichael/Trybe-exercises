function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfTheMonth() {
  let getDaysList = document.getElementById("days");
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const dayOfMonth = decemberDaysList[index];
    const createDays = document.createElement("li");
    createDays.innerHTML = dayOfMonth;
    createDays.className = "day";
    getDaysList.appendChild(createDays);

    if (decemberDaysList[index] === 24 || dayOfMonth === 31) {
      createDays.className = "day holiday";
    } else if (
      decemberDaysList[index] === 04 ||
      decemberDaysList[index] === 11 ||
      decemberDaysList[index] === 18
    ) {
      createDays.className = "day friday";
    } else if (decemberDaysList[index] === 25) {
      createDays.className = "day holiday friday";
    }
  }
}

function createHolidayButton(Feriados) {
  let buttonContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");
  let newButtonClass = "btn-holiday";

  newButton.innerHTML = Feriados;
  newButton.className = newButtonClass;

  buttonContainer.appendChild(newButton);
}

function changeBrackgroundColorHolidayDays() {
  const btnHoliday = document.querySelector(".btn-holiday");
  const getHolidays = document.getElementsByClassName("holiday");
  let backgroundColor = "rgb(238,238,238)";
  let setNewColor = "blue";

  btnHoliday.addEventListener("click", function () {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}

function displayFriday(sexta){
  let buttonContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");
  let newButtonClass = "btn-friday";
  newButton.innerHTML = sexta;
  newButton.className = newButtonClass;

  buttonContainer.appendChild(newButton);
}

 function changeBrackgroundColorFridays() {
   const btnFriday = document.querySelector(".btn-friday");
   const getFridays = document.getElementsByClassName("friday");
   let backgroundColor = "rgb(238,238,238)";
   let setNewColor = "red";
 
   btnFriday.addEventListener('click',function(){
     for (let index = 0; index < getFridays.length; index += 1) {
       if (getFridays[index].style.backgroundColor === setNewColor) {
         getFridays[index].style.backgroundColor = backgroundColor;
       } else {
         getFridays[index].style.backgroundColor = setNewColor;
       }
      }
   });
 }
 


createDaysOfTheWeek();
createDaysOfTheMonth();
createHolidayButton("Feriados");
changeBrackgroundColorHolidayDays();
displayFriday('Sexta-Feira');
changeBrackgroundColorFridays()
// Escreva seu código abaixo.
