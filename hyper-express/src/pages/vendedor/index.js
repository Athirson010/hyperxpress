import React from 'react';

import Button from '../../components/Button';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from './style';
import Remove from './images/remove.svg' 

export default function Vendedor() {
  return (
    <>
      <Header />
      <Container className="container">
      <div className="centralizar">
        <div className="flex">
            <div>
              <div className="circulo">10</div>
              <span>Produtos</span>
            </div>

            <div>
              <div className="circulo">2</div>
              <span>Pedidos</span>
            </div>

            <div>
              <div className="circulo">3</div>
              <span>Finalizados</span>
            </div>
          </div>
        
      </div>

      <div className="flex">
        <div>
            
        </div>

        <div>
          <span>Camiseta programador</span>
        </div>
          
        <div>
          <span>R$ 49,90</span>
          <span>ou 4x R$12,49 sem juros</span>
        </div>

        <div>
          <img width="50px" src={Remove} />
        </div>
      </div>

      <div>
        <Button>Anunciar</Button>
      </div>
      </Container>
      <Footer />
    </>
  );
}
