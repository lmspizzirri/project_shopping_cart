import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const loadMessage = document.createElement('p');
const products = document.querySelector('.products');
const addLoad = () => {
    loadMessage.className = 'loading';
    loadMessage.innerText = 'carregando...'
    products.appendChild(loadMessage);
}
addLoad();
console.log(loadMessage);
const removeLoad = () => {
    products.removeChild(loadMessage);
}
const criacaoProdutos = async () => {
  try{
    //Recebendo as info dos computadores
    const info = await fetchProductsList('computador');
    //Adicionando dentro da section, os elementos com as info dos produtos
    info.forEach((element) => products.appendChild(createProductElement(element)));
  }
  catch(error){
    const errorMessage = document.createElement('p');
    errorMessage.className ='error';
    errorMessage.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
    products.appendChild(errorMessage);
  }
  removeLoad();

}
criacaoProdutos();
