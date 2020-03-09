import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-person-masculino/05/D22-3253-405/D22-3253-405_zoom1.jpg?ts=1571758175&ims=326x"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$199,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-person-masculino/05/D22-3253-405/D22-3253-405_zoom1.jpg?ts=1571758175&ims=326x"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$199,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-person-masculino/05/D22-3253-405/D22-3253-405_zoom1.jpg?ts=1571758175&ims=326x"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$199,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-person-masculino/05/D22-3253-405/D22-3253-405_zoom1.jpg?ts=1571758175&ims=326x"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$199,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-person-masculino/05/D22-3253-405/D22-3253-405_zoom1.jpg?ts=1571758175&ims=326x"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$199,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
