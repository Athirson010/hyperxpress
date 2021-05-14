import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';
import {
  Container,
  ContainerChegada,
  Negrito,
  ContainerInfoPedido,
  EmLinha,
} from './style';
import camisa from '../../assets/images/comisaNike.jpg';


export default function Follow() {
  return (
    <>
      <Header/>
      <Container className="container flex">
        <div>
        <div className="flex">
          <strong>SHEIN Simples ocasional Suéter </strong>
          <img src={camisa} alt="Camisa"/>
        </div>

        <strong>Chegada Prevista para Segunda-Feira, 5 de abril</strong>
        <p>Em Preparação</p>
        <p>A Caminho</p>
        <p>Saiu de Santo André dia 01/04/2021 as 13:00</p>

        </div>
      <ContainerInfoPedido>
        <strong>Detalhes da Compra</strong>
        <div className="flex">
          <p>Código do Pedido:</p>
          <p> #9808908</p>
        </div>

          <div className="flex">
            <p>Preço:</p>
            <p>R$:49.90</p>
          </div> 
  
          <p>Envio:</p>

          <div className="flex">
            <p>Pagamento:</p>
            <p>Á Vista</p>
          </div>
   
          
          <div className="flex">
          <strong>Total:</strong>
            <p>R$:49.90</p>
          </div>

       
    
      </ContainerInfoPedido>


      </Container>
     
      <Footer/>
    </>
  );
}
