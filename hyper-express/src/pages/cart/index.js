import Header from 'components/Header';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from 'components/Footer';
import {
  Container,
  Resumo,
  Negrito,
  ScrollItens,
  ColumnScrollItens,
} from './style';
import camisa from 'assets/images/comisaNike.jpg';
import Title from 'components/Title';
import short from 'assets/images/short.jpg';
import ItemCart from 'components/ItemCart';
import ResumeDemand from 'components/ResumeDemand';
import { useAuth } from 'hooks/auth';

export default function Cart() {
  return (
    <>
      <Header />
      <Container className=" flex container">
        <ScrollItens>
          <Title text="Produtos" font="0.9" />

          <ItemCart
            caminho={camisa}
            descricao="Camiseta programador"
            tamanho="G"
            valor="R$ 49.90"
          />
          <ItemCart
            caminho={camisa}
            descricao="Camiseta programador"
            tamanho="G"
            valor="R$ 49.90"
          />
          <ItemCart
            caminho={camisa}
            descricao="Camiseta programador"
            tamanho="G"
            valor="R$ 49.90"
          />
          <ItemCart
            caminho={camisa}
            descricao="Camiseta programador"
            tamanho="G"
            valor="R$ 49.90"
          />
          <ItemCart
            caminho={camisa}
            descricao="Camiseta programador"
            tamanho="G"
            valor="R$ 49.90"
          />
          <ItemCart
            caminho={short}
            descricao="Bermuda Nike moleton"
            tamanho="P"
            valor="R$ 79,99"
          />
          <ItemCart
            caminho={camisa}
            descricao="Camiseta programador"
            tamanho="G"
            valor="R$ 49.90"
          />
          <ItemCart
            caminho={short}
            descricao="Bermuda Nike moleton"
            tamanho="P"
            valor="R$ 79,99"
          />
          <ItemCart
            caminho={camisa}
            descricao="Camiseta programador"
            tamanho="G"
            valor="R$ 49.90"
          />
          <ItemCart
            caminho={short}
            descricao="Bermuda Nike moleton"
            tamanho="P"
            valor="R$ 79,99"
          />
        </ScrollItens>

        <ResumeDemand
          id="resume"
          valorProduto="R$: 129.99"
          valorFrete="R$: 29.99"
          total="R$: 159,98"
        />

        
      </Container>

      <Footer />
    </>
  );
}
