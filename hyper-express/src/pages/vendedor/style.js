import styled from 'styled-components';

export const Container = styled.div`


 div.circulo{
   display: flex;
   align-items: center;
   justify-content: center;
   width: 200px;
   height: 200px;
   border-radius: 50%;
   float: left;
   font-size: 50px;
   font-weight: bold;
   color: var(--darkBold);
   border: solid;
   background: linear-gradient(180deg, var(--white) 0%, (--white) 16%, -var(--white) 100%);
}
 span {
    display: block;
    text-align-last: center;
    font-size:30px;
  }
  .centralizar {
    margin-left: 8em;
    margin-right: 8em;
}
`;
