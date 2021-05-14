import React from 'react';
import { Container } from './styles';
import logo from '../Footer/assets/images/LogoHyper.svg';
import facebook from '../Footer/assets/images/facebook.png';
import instagram from '../Footer/assets/images/instagram.png';

function Footer() {
  return (
    <Container>
      <div className="Wrapper">
        <div className="Row">
          <ul>
            <div className="Title">Links Úteis</div>
            <li className="Link">
              <a className="Link" href="#">
                Produtos
              </a>
            </li>
            <li className="Link">
              <a className="Link" href="#">
                Carrinho
              </a>
            </li>
            <li className="Link">
              <a className="Link" href="#">
                Cadastro
              </a>
            </li>
            <li className="Link">
              <a className="Link" href="#">
                Favoritos
              </a>
            </li>
            <li className="Link">
              <a className="Link" href="#">
                Meus anúncios
              </a>
            </li>
            <li className="Link">
              <a className="Link" href="#">
                Hyper Premium
              </a>
            </li>
          </ul>
          <ul>
            <div className="Title">Contato</div>
            <h2 className="FooterTxt" href="#">
              0800 123 4567
            </h2>
            <h4 className="FooterTxt">
              segunda a domingo: 8h às 20h (exceto feriados)
            </h4>
          </ul>
          <ul>
            <div className="Title">Rede Sociais</div>
            <li className="Link">
              <img className="Social" src={facebook} href="#"></img>
              <a className="Link" href="#">
                Facebook
              </a>
            </li>
            <li className="Link">
              <img className="Social" src={instagram} href="#"></img>
              <a className="Link" href="#">
                Instagram
              </a>
            </li>
          </ul>
          <ul>
            <img className="Logo" src={logo} href="#"></img>
            <h2 className="FooterTxt">Hyper Xpress</h2>
          </ul>
        </div>
      </div>
    </Container>
  );
}
export default Footer;

// import React from 'react';
// import { Container } from './styles';

// function Footer() {
//   return (
//       <Container>

//         <h2>Footer muito loko</h2>

//       </Container>
//   );
// }

// export default Footer;
