import dataset from './model/dataset.js';
import foodsModel from './model/food.js';
//Exibindo todos os itens cadastros ao recarregar a página inicio
if (localStorage.getItem('foods-app:loaded') !== 'ok') {
  foodsModel.load(dataset);
  localStorage.setItem('foods-app:loaded', 'ok');
}
//Exibindo todos os itens cadastros ao recarregar a página fim
let foods = foodsModel.readAll();

for (const item of foods) {
  const itensDiv = document.getElementById('itens');
  const cardHTML = addItem(item);
  itensDiv.insertAdjacentHTML('beforeend', cardHTML);
}
//corrigindo endereço imagem linha 21 images/
function addItem(item) {
  let cardHTML = `
    <div class='col'>
      <div class='card' style='width: 18rem;'>
        <img src='images/${item.image}' class='card-img-top' alt='...'> 
        <div class='card-body'>
          <h5 class='card-title'>${item.name}</h5>
          <p class='card-text'>${item.description}</p>
          <a href='#' class='btn btn-primary'>Adicionar</a>
        </div>
      </div>
    </div>`;
  return cardHTML;
}
//limpar campus início
function loadFormValues(title, foodName, foodImage,foodDescription) {
  const formLabel = document.querySelector('#exampleModalLabel');
  const foodNameInput = document.querySelector('#name');
  const foodImageInput = document.querySelector('#image');
  const foodDescriptionInput = document.querySelector('#description');

  formLabel.innerHTML = title;
  foodNameInput.value = foodName;
  foodImageInput.value = foodImage;
  foodDescriptionInput.value = foodDescription;
}

function loadFormCreateFood() {
  loadFormValues('Adicionar Comida', '', '', '');

const foodForm = document.getElementById('formFood');
foodForm.onsubmit = function (event) {
  // Previnir que o modal fique abrindo em loop.
  event.preventDefault();

  // Montar o objeto food baseado nos dados do formulário.
  let food = Object.fromEntries(new FormData(formFood));

  // Adicionar o item (food) no LocalStorage.
  const newFood = foodsModel.create(food);

  const itensDiv = document.getElementById('itens');
  const cardHTML = addItem(newFood);
  itensDiv.insertAdjacentHTML('beforeend', cardHTML);

  // Fechar o foodModal
  var myModalEl = document.getElementById('foodModal');
  var foodModal = bootstrap.Modal.getInstance(myModalEl);
  foodModal.toggle();
};

}

window.loadFormCreateFood = loadFormCreateFood;
//limpar campus fim