import React from 'react';
import { useAuth } from 'hooks/auth';

import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from './style';

export default function Home() {
  const { user, singOut } = useAuth();

  return (
    <>
      <Header />
      <Container className="container">
        <div className="nova"></div>
      </Container>
      <Footer />
    </>
  );
}
