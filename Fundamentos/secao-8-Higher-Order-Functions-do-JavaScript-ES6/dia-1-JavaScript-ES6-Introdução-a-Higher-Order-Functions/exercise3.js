// const compareAnswers = () => {
//   const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
//   const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
//   let points = 0;
//   for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
//      if (RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]) {
//       points += 1;
//      } else if (STUDENT_ANSWERS[index] === 'N.A') {
//       points
//      } else {
//       points -= 0.5;
//      }
//   }
//  return points;
// }
// const correction = (callback) => {
//   return `Resultado final: ${callback()} pontos`;
// }
// console.log(correction(compareAnswers));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};
const countPoints = (rightAnswers, studentAnswers, callback) => {
  let counter = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const callbackReturn = callback(rightAnswers[index], studentAnswers[index]);
    counter += callbackReturn;
  }
  return `Resultado final: ${counter} pontos`;
};
console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));