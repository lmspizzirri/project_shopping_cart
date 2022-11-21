import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const criacaoProdutos = async () => {
    //Recebendo as info dos computadores
  const info = await fetchProductsList('computador');
    //Selecionado a section dos produtos
  const products = document.querySelector('.products');
    //Adicionando dentro da section, os elementos com as info dos produtos
  info.forEach((element) => products.appendChild(createProductElement(element)));
}
criacaoProdutos();