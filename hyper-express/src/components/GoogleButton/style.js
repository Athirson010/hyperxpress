import styled from 'styled-components';
import GoogleButton from 'react-google-login';

export const Container = styled.div`
  img {
    width: 10rem;
    border-radius: 50%;
  }
`;

export const Google = styled(GoogleButton)`
  width: 100%;
  height: 4.5rem;

  margin: 0.5rem auto;

  display: flex !important;
  justify-content: center;
  align-items: center;

  box-shadow: 0 0 8px rgb(0 0 0 /40%) !important;

  color: var(--dark) !important;
  background: var(--white) !important;

  div {
    margin-left: -4rem;
    cursor: pointer !important;
    background: transparent !important;
  }

  span {
    cursor: pointer !important;
    font-size: 1.5rem !important;
    font-weight: 700 !important;
  }
`;
