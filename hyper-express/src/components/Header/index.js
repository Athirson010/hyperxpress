import React, { useState } from 'react';
import { useAuth } from 'hooks/auth';
import { Link } from 'react-router-dom';

import InputSearch from 'components/InputSearch';
import Hamburguer from './Hamburguer';
import Avatar from './Avatar';
import 'antd/dist/antd.css';

import imgLogo from 'assets/svgs/Logo.svg';
import imgPremium from 'assets/svgs/premium.svg';
import imgFavoritos from 'assets/svgs/favoritos.svg';
import imgEntrar from 'assets/svgs/entrar.svg';
import imgCarrinho from 'assets/svgs/carrinho.svg';
import imgAnuncios from 'assets/svgs/anuncios.svg';

import { Container, Primary, Secundary, InputContent } from './style';

export default function Header() {
  const { user } = useAuth();

  return (
    <Container>
      <Primary className="padding flex">
        <img src={imgLogo} alt="logo" />

        <div className="flex">
          <Link to="/premium">
            <img src={imgPremium} alt="premium" />
            <span>Premium</span>
          </Link>

          <Link to="/ads">
            <img src={imgAnuncios} alt="Anúncios" />
            <span>Anúncios</span>
          </Link>

          <Link to="/cart">
            <img src={imgCarrinho} alt="carrinho" />
            <span>Carrinho</span>
          </Link>

          <Link to="/favorites">
            <img src={imgFavoritos} alt="favoritos" />
            <span>Favoritos</span>
          </Link>

          {user.avatar ? (
            <Avatar />
          ) : (
            <Link to="/login">
              <img src={imgEntrar} alt="entrar" />
              <span>Entrar</span>
            </Link>
          )}

          <Hamburguer />
        </div>
      </Primary>

      <Secundary className="padding flexColumn">
        <InputContent>
          <InputSearch />
        </InputContent>

        <div>
          <Link to="/">Acessíveis</Link>
          <Link to="/">Acessórios</Link>
          <Link to="/">Populares</Link>
          <Link to="/">Infântil</Link>
          <Link to="/">Masculino</Link>
          <Link to="/">Feminino</Link>
          <Link to="/">Plus size</Link>
        </div>
      </Secundary>
    </Container>
  );
}
