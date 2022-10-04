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
      createDays.className = "day holyday";
    } else if (
      decemberDaysList[index] === 04 ||
      decemberDaysList[index] === 11 ||
      decemberDaysList[index] === 18) {
      createDays.className = "day friday";
    } else if(decemberDaysList[index] === 25) {
      createDays.className = "day holiday friday";
    }
    
  }
}

function createHolidayButton(Feriados) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonClass = 'btn-holiday';

  newButton.innerHTML = Feriados;
  newButton.className = newButtonClass;
  
  buttonContainer.appendChild(newButton);
}

function changeBrackgroundColorHolidayDays(){
  const btnHoliday = document.querySelector('.btn-holiday');
  const getHolidays = document.querySelector('.holidays')
  btnHoliday.addEventListener('click', changeBrackgroundColorHolidayDays)
  if () {
    
  }
}


createDaysOfTheWeek();
createDaysOfTheMonth();
createHolidayButton('Feriados');
changeBrackgroundColorHolidayDays()

// Escreva seu código abaixo.
