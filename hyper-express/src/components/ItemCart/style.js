import styled from 'styled-components';

export const Container = styled.div`
  margin: 4% 0;
  padding: 2% 5%;

  /* font-size: 1rem; */

  box-shadow: 0 0 1rem #0005;

  svg {
    width: 2.3rem;
    height: 2.3rem;

    cursor: pointer;

    path {
      cursor: pointer;
    }
  }
  svg:hover {
    color: var(--redError);
  }
  img {
    width: 6rem;
    height: 6rem;
    border-radius: 5px;
  }
  p {
    display: inline-block;
    margin: 0 2% 0 2%;
  }
`;
