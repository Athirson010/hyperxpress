import { createGlobalStyle } from 'styled-components';

export const tam = (size, width = 1440) => `${(size / width) * 100}vw`;

export const GlobalStyle = createGlobalStyle`
  :root {
  --purple: #6930C3;
  --purpleDark: #5423A0;

  --redError:#c50000;

  --whiteBold: #E9ECEF;
  --white: #F8F9FA;  
  --whiteMedium: #e3e3e3;

  --grayBold: #ADB5BD;
  --gray: #CED4DA;
  --grayMedium: #DEE2E6;

  --darkBold: #212529;
  --dark: #343A40;
  --darkMedium: #495057;
  --darkLigthen: #6C757D;

  /* --mobile: 425px;
  --tablet: 768px;
  --telaPequena:1024; */
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  cursor: default;
}

html {
  font-size: 62.5%;

  @media (max-width: 1170px ) {
    font-size: 59%;
  }
  @media (max-width: 1085px ) {
    font-size: 55%;
  }
  @media (max-width: 768px) {
    font-size: 48%;
  }
}

body {
  font: 400 1.6rem "Poppins", serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  background: var(--white);

  &::-webkit-scrollbar {
    width: 10px;

  } 

  &::-webkit-scrollbar-thumb {
    background: var(--darkMedium);  
  }
}

h1,h2,h3,h4,h5,h6 {
  font-weight: bold;
  margin: 0;
}

p {
  margin: 0;
}

a {
  cursor: pointer;
  text-decoration: none;

  span {
    cursor: pointer;
  }

  img {
    cursor: pointer;
  }
}

ul, li{
  list-style: none;
  text-align: center;
  cursor: pointer;
}

/* CLASSES PADRÕES */

.flex {
  width: 100% ;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flexColumn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

/* Links */

.link {
  text-decoration: none;
  text-align: center;

  cursor: pointer;
  font-weight: 500;
  font-size: 1.5rem;

  transition: all ease 100ms;
  color: var(--purple);

  :hover {
    color: var(--dark);
  }
}

.linkButton {
  padding: 11px 80px;

  margin: 0.5rem auto;

  font-size: 1.7rem;
  font-weight: 700;

  border-radius: 3px;
  border: none;
  box-shadow: 0 0 8px rgb(0 0 0 /30%);

  cursor: pointer;
  transition: all 150ms;

  text-align: center;
  text-decoration: none;

  font-size: 1.6rem;
  font-weight: 700;

  color: var(--white); 
  background: var(--purple);

  &:hover {
    color: var(--white); 
    background: var(--purpleDark);
  }

  @media (max-width: 700px) {
    font-size: 85%;
    padding: 1rem 2.5rem;
  }
}

.padding {
  padding: 0 7%;

  @media (max-width: 1024px ) {
    padding: 0 5%;
  }
  @media (max-width: 768px ) {
    padding: 0 4%;
  }
}

.container {
    padding: 4% 7%;

    @media (max-width: 1024px ) {
      padding: 4% 5%;
    }
    @media (max-width: 768px ) {
      padding: 4% 4%;
    }

  }

/* animations */

@keyframes sobe-desce {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`;

/*
  11px - 0.68rem
  12px - 0.75rem
  13px - 0.8rem
  14px - 0.87rem
  15px - 0.9rem
  16px - 1rem
  18px - 1.2rem
  20px - 1.25rem
  24px - 1.5rem
  26px - 1.6rem
  28px - 1.75rem
  32px - 2rem
  38px - 2.3rem
  40px - 2.5rem
  60px - 3.75rem
*/
