import React from 'react';
import { Container } from './style';
import Title from '../Title';
import Button from '../Button';

export default function ResumeDemand({
  valorProduto,
  valorFrete,
  total,
  ...rest
}) {
  return (
    <Container {...rest} className="flexColumn">
      <Title text="Pedido" font="0.85" />

      <div className="flex">
        <p>Produtos</p>
        <span>{valorProduto}</span>
      </div>

      <div className="flex">
        <p>Frete</p>
        <span>{valorFrete}</span>
      </div>

      <div className="flex">
        <strong>Total</strong>
        <strong>{total}</strong>
      </div>
      <Button>Comprar</Button>
    </Container>
  );
}
