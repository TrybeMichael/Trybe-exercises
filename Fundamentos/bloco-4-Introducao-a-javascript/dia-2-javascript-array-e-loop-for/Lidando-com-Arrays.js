//Percorra o array imprimindo todos os valores nele contidos com a função console.log();

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//   for(let index = 0; index < numbers.length;index += 1){
//     console.log(numbers[index])
//   }

//Some todos os valores contidos no array e imprima o resultado;

// let soma = 0;
//   for(let index = 0;index < numbers.length;index +=1){
//     soma = soma + numbers[index];
//   }
//   console.log(soma)

//Calcule e imprima a média aritmética dos valores contidos no array;

// let soma = 0;
// for(let index = 0;index < numbers.length;index += 1){
//   soma = soma + numbers[index];
// }
// console.log(soma/numbers.length)
//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// let soma = 0;
// for(let index = 0;index < numbers.length;index += 1){
//   soma = soma + numbers[index];
// }
// console.log(soma/numbers.length)
// if(soma/numbers.length > 20){
//   console.log("valor maior que 20")
// }else{
//   console.log("valor menor ou igual a 20")
// }

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// let biggest = 0;
// for(let index = 0;index < numbers.length;index += 1){
//   if(numbers[index] > biggest){
//     biggest = numbers[index]
//   }
// }
// console.log(biggest)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
//   let counter = 0;
// for(let index = 0;index < numbers.length;index += 1){
//   if(numbers[index]%2 !== 0){
//     counter = counter += 1;
//   }
// }
// console.log(counter)

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
// let lowest = numbers[0];
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] < lowest) {
//     lowest = numbers[index];
//   }
// }
// console.log("O menor número é:", lowest);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

  // let counter = [];
  // for(let index = 0;index <= 25;index += 1){
  //   counter.push(index)
  // }
  // console.log(counter);  

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2*

let counter = [];
for(let index = 0;index <= 25;index += 1){
  counter.push(index/2)
}
  console.log(counter);
