import { getSavedCartIDs, saveCartID } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement, getIdFromProduct } from './helpers/shopFunctions';
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

const loadCart = () => {
  const savedIds = getSavedCartIDs();
  const cart = document.querySelector('.cart__products');
  savedIds.forEach(async (id) => {
    const data = await fetchProduct(id);
    const cartElement = createProductElement(data);
    cart.appendChild(cartElement);
  });
}
const subtotal = () => {
  const cart = document.querySelector('.cart__products');
  console.log(cart);
  const prices = cart.map((element) => element.price);
  const total = 0;
  for(i = 0; i < prices.length; i += 1){
    total += prices[i];
  }
  const subtotalInfo = document.getElementsByClassName('total-price');
  subtotalInfo.innerText = `R$ ${total}`;
}
window.onload = () => {
  loadCart();
}