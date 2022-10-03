const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
  function addTechToLi(event){
    const addClassToLi =  document.querySelector('.tech'); //acessa elemento
    addClassToLi.classList.remove('tech');// remove class do elemento
    event.target.classList.add('tech');// adiciona class ao elemento 'alvo'
    input.value = '';
  }
  firstLi.addEventListener("click", addTechToLi);// adiciona evento a função
  secondLi.addEventListener("click", addTechToLi);
  thirdLi.addEventListener("click", addTechToLi);
// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
  function atInputChangeClass(event){
    const inputText = document.querySelector('.tech');
      inputText.innerText = event.target.value
  }
  input.addEventListener('input', atInputChangeClass)


// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

myWebpage.addEventListener('dblclick', function() {
  location.replace('https://blog.betrybe.com/');
});
  

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// function colorChange(event){
//   myWebpage.style.color = 'blue';
// }

myWebpage.addEventListener('mouseenter',function(event){
  event.target.style.color = 'blue';  
})

myWebpage.addEventListener('mouseout',function(event){
  event.target.style.color = 'green';  
})


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.