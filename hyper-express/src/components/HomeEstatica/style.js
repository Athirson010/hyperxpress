import styled from 'styled-components';
import ImgRoupas from './images/roupas.svg';

export const Container = styled.div`
  .content {
    width: 90%;
    margin: auto;
  }

  .banner-primary {
    margin-top: 2em;
    margin-bottom: 3em;
  }
  .banner-primary h1 {
    width: 80%;
    margin-bottom: 1em;
    text-align: -webkit-center;
  }
  .banner-primary button.sc-eCssSg.heIxZt {
    margin-left: 5em;
    margin-top: 0;
    width: 50%;
  }

  .carrosel-destaque {
    margin-top: 2em;
  }
  .carrosel-destaque img {
    margin-top: 2em;
    margin-bottom: 3em;
  }
  .Container {
    width: 100%;
    margin: auto;
  }

  .banner-second {
    background-color: var(--dark);
    width: 100%;
    padding-top: 4em;
    padding-bottom: 4em;
    text-align-last: center;
  }

  .banner-second h4 {
    text-decoration: solid;
    text-align: center;
    color: var(--whiteMedium);
    width: 89%;
  }
  .banner-second h2 {
    color: var(--white);
  }
  .item.produtos {
    text-align: -webkit-center;
  }

  .banner-three {
    background: url(${ImgRoupas});
    width: 100%;
    text-align: -webkit-center;
    height: 20em;
  }

  .banner-three input {
    margin-top: 1em;
    margin-bottom: 3em;
    color: var(--whiteMedium);
    background-color: var(--purple);
    font-size: 1.7rem;
    font-weight: 700;
    width: 50%;
    height: 40rem;
    border-radius: 10px;
    border: none;
    box-shadow: 0 0 8px rgb(0 0 0 /30%);
  }
  .banner-three center {
    margin-top: 3em;
    margin-bottom: 2em;
  }
  .input-anuncios input {
    background-color: var(--darkLigthen);
    color: var(--whiteMedium);
    width: 35%;
    height: 50px;
    place-content: center;
    margin-right: 6em;
    margin-left: 6em;
    margin-top: 5em;
  }
  .input-anuncios.flex {
    height: 80px;
  }
`;
