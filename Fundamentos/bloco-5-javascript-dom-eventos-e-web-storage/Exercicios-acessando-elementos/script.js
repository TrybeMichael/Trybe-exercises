// // Acesse o elemento elementoOndeVoceEsta.
// const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

// // Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// // const pai = elementoOndeVoceEsta.parentElement;
// // pai.style.color = 'red';

// // Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
// // Você se lembra dos vídeos da aula anterior, como fazer isso?
// const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
// primeiroFilhoDoFilho.innerText = "primeiroFilhoDoFilho";

// // Acesse o primeiroFilho a partir de pai.
// const primeiroFilho = pai.firstElementChild;
// primeiroFilho.innerHTML = "primeiroFilho";

// // Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// // Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// const textElement = elementoOndeVoceEsta.nextSibling;
// textElement.style.color = "blue";

// // Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
// terceiroFilho.innerHTML = "terceiro filho";
// // Agora acesse o terceiroFilho a partir de pai.
// const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

const pai = document.getElementById("pai");
const irmao = document.createElement("section");
irmao.id = "irmao";
pai.appendChild(irmao);

const father = document.getElementById("elementoOndeVoceEsta");
const filhoElementoOndeVoceEsta = document.createElement("section");
filhoElementoOndeVoceEsta.innerHTML = "filhoElementoOndeVoceEsta";
father.appendChild(filhoElementoOndeVoceEsta);

// const primeiroFilhoDoFilho = getElementById("primeiroFilhoDoFilho");
// const filhoPrimeiroFilhoDoFilho = document.createElement("section");
// filhoPrimeiroFilhoDoFilho.id = "filho";
// primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho'); // Recupere o elemento com o id `primeiroFilhoDoFilho`
const filhoPrimeiroFilhoDoFilho = document.createElement('section'); // Crie um novo elemento 
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

const terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);