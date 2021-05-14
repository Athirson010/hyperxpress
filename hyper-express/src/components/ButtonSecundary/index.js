import React from 'react';
import { Container } from '../Button/style';

export default function ButtonSecundary({ children, ...props }) {
  return (
    <Container secundary whileTap={{ scale: 0.87 }} {...props}>
      {children}
    </Container>
  );
}
