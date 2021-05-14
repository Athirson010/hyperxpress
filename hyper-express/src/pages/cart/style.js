import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  align-items: flex-start !important;

  #resume {
    margin-top: 8.8rem;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center !important;
  }
`;

export const ScrollItens = styled.div`
  width: 60%;

  @media (max-width: 720px) {
    width: 100%;
  }
`;
