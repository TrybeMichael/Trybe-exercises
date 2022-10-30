const result = (number,myNumber) => number === myNumber;
const lotery = (myNumber, callback) => {
  const number = Math.floor(Math.random() * (5 - 1) + 1);
  console.log(number);
  return callback(myNumber, number) ? 'You win!!' : 'Try again';

}
  console.log(lotery(3, result));
