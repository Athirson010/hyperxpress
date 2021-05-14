import { api } from 'api/api';
import React, { useState } from 'react';
import ImgLupa from './assets/lupa.svg';
import { Container, Input } from './style';

export default function InputSearch({ ...props }) {
  const [pesquisa, setPesquisa] = useState([]);

  const handleSearch = async (evt) => {
    const { value } = evt.target;
    const params = {};

    if (value) {
      params.nomeProduto = value;
      params.nomeCategoria = value;
      params.nomeSubCategoria = value;

      const { data } = await api.get(`/produtos/pesquisa`, { params });

      console.log(data);
      setPesquisa(data);
    }

    console.log(pesquisa.length);
  };

  return (
    <>
      <Container {...props} className="flex">
        <Input
          type="search"
          // onChange={handleSearch}
          placeholder="Buscar por produtos, marcas e muito mais"
        />
        <img src={ImgLupa} alt="lupa" />
      </Container>
      {/* <div>
        {pesquisa.map((produto) => (
          <div key={produto.id}>
            <h2>{produto.nomeProduto}</h2>
          </div>
        ))}
      </div> */}
    </>
  );
}
