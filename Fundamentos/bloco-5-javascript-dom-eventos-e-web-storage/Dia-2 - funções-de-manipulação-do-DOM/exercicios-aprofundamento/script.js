// Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
function createH1() {
  const createTitle = document.createElement("h1");
  createTitle.innerText = "Exercício - JavaScript DOM";
  document.body.appendChild(createTitle);
}

// Adicione a tag main com a classe main-content como filho da tag body;

function createTags() {
  const createTagMain = document.createElement("main");
  createTagMain.className = "main-content";
  document.body.appendChild(createTagMain);

  // Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

  const centerSection = document.createElement("section");
  centerSection.className = "center-content";
  createTagMain.appendChild(centerSection);

  // Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

  const paragraph = document.createElement("p");
  paragraph.innerText =
    "Integer sed nulla lectus. Morbi facilisis urna posuere ligula tempus pharetra. Nulla placerat hendrerit lectus eu condimentum. In hac habitasse platea dictumst. Cras ac metus varius, pretium sapien sit amet, mattis nibh. Ut in mauris metus. Nulla mattis orci sit amet interdum tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis tincidunt purus justo, at iaculis turpis tempor ac. Sed euismod risus ex, cursus aliquam elit convallis ultricies. Maecenas iaculis, nulla non condimentum rutrum, enim urna accumsan libero, id tincidunt mauris arcu ullamcorper sapien. Ut facilisis hendrerit cursus.";
  centerSection.appendChild(paragraph);

  // Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

  const leftSection = document.createElement("section");
  leftSection.className = "left-content";
  createTagMain.appendChild(leftSection);

  // Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

  const rightSection = document.createElement("section");
  rightSection.className = "right-content";
  createTagMain.appendChild(rightSection);

  //Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

  const image = document.createElement("img");
  image.className = "small-image";
  image.setAttribute("src", "https://picsum.photos/200");
  leftSection.appendChild(image);

  // Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

  const list = document.createElement("ul");
  rightSection.appendChild(list);
  const arrayList = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
  for(let index in arrayList){
  const listItem = document.createElement('li')
  listItem.innerText = arrayList[index];
  list.appendChild(listItem)
  }

  // Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

  for (let index = 1; index <= 3; index += 1) {
    const subTitle = document.createElement('h3');
    subTitle.innerHTML = 'Show ' + index;
    createTagMain.appendChild(subTitle);
  }


  
  
}

//Chamando Funções
createH1();
createTags();
