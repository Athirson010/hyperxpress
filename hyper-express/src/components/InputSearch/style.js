import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;

  padding: 0.5rem 1.6rem;

  box-shadow: 0px 0 5px #0006;
  border-radius: 5px;

  background: var(--white);

  img {
    width: 2.3rem;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 95%;
  height: 100%;

  font-size: 1.8rem;
  font-family: 'Poppins';

  border: unset;

  transition: all ease 300ms;
  cursor: text;

  color: var(--darkMedium);
  background: transparent;

  :focus {
    ::placeholder {
      transition: all ease-in-out 100ms;
      opacity: 0;
    }
  }

  ::placeholder {
    text-align: center;
    font-weight: 300;
    opacity: 0.7;
    color: var(--darkMedium);
  }
`;
