import { Container } from './style';
import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

export default function ItemCart({ caminho, descricao, tamanho, valor }) {
  return (
    <Container className="flex">
      <img src={caminho} alt="item-produto" />
      <p>{descricao}</p>
      <p>{tamanho}</p>
      <p>{valor}</p>
      <CloseOutlined />
    </Container>
  );
}
