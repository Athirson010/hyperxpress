import React from 'react';
import { Container } from './style';
import { Input,Select } from 'antd';
import Button from '../Button';
import ImgBannerCovid from './images/imageCovid.svg';
import ImgProdutos from './images/produtos.svg';
import ImgTrocas from './images/trocas.svg';
import ImgVendas from './images/vendas.svg';
import ImgCarrosel from './images/carrousel.svg';
import { Group } from 'antd/lib/avatar';

export default function HomeEstatica() {
  return (
    <Container>
      <div className="content">
        <div className="banner-primary flex">
          <div>
            <h1>
              Com a covid-19, fique em casa e aumente sua renda vendendo suas
              roupas.
            </h1>
            <Button name="Anunciar produto">Anunciar produto</Button>
          </div>
          <div className="img-bannerCovid">
            <img src={ImgBannerCovid} />
          </div>
        </div>
        <div className="carrosel-destaque Container">
          <div>
            <h2>Destaques</h2>

            <center>
              <img src={ImgCarrosel} />
            </center>
          </div>
        </div>
      </div>
      <div className="banner-second flex">
        <div className="item produtos">
          <img src={ImgProdutos} />
          <h2>Produtos</h2>

          <h4>
            Compre boas roupas e em bom estado, contribua para o consumo
            conciente.
          </h4>
        </div>

        <div className="item trocas">
          <img src={ImgTrocas} alt="imgTrocas" />
          <h2>Trocas</h2>

          <h4>Troque seus produtos e compartilhe seu bom gosto.</h4>
        </div>

        <div className="item vendas">
          <img src={ImgVendas} />
          <h2>Vendas</h2>

          <h4>Anuncie as roupas que você não utiliza e aumente sua renda.</h4>
        </div>
      </div>

      <div className="banner-three">
        <Input value="Receba ofertas com preços exclusivos!" type="reset" />
        <div className="input-anuncios flex">
          <Input placeholder="Digite seu nome" />
          <Input placeholder="Digite seu e-mail" />
        </div>
        <center>
          <Button>Receber Anúncios</Button>
        </center>
      </div>
    </Container>
  );
}
