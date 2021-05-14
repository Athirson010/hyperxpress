import React, { useEffect, useState } from 'react';
import { useAuth } from 'hooks/auth';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Title from 'components/Title';
import ResumeDemand from 'components/ResumeDemand';
import Footer from 'components/Footer';
// import { api } from 'api/api';
import { Conteiner, Address } from './style';

export default function Payment() {
  const { user } = useAuth();

  // const [userAndress, setAndress] = useState([]);

  // useEffect(() => {
  //   const response = api.get(``);
  //   setAndress(response.data);
  // }, []);

  return (
    <>
      <Header />
      <Conteiner className="container flex">
        <Address>
          <Title text="Endereço de Entrega" font="0.85" />
          <p>
            {/* {user.Nome} */}
            Rodrigo Menezes Carvalho da Silva
          </p>

          <p>
            {/* {userAndress.logradouro}, {userAndress.numero} */}
            Rua São Francisco, 500
          </p>

          <p>
            {/* {userAndress.bairro} - {userAndress.cidade} */}
            Boa Sorte - São Paulo SP
          </p>

          <p>
            {/* CEP - {userAndress.cep} */}
            CEP - 12390-765
          </p>

          <Link to="/">Alterar endereço de entrega</Link>
        </Address>

        <ResumeDemand
          id="resume"
          valorProduto="R$: 129.99"
          valorFrete="R$: 29.99"
          total="R$: 159,98"
        />

        <div className="coast">
          <div id="oshi"></div>
        </div>
      
      </Conteiner>
      <Footer />
    </>
  );
}
