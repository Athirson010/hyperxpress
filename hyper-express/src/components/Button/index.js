import React from 'react';
import { Container } from './style';

export default function Button({ children, ...props }) {
  return (
    <Container whileTap={{ scale: 0.87 }} {...props}>
      {children}
    </Container>
  );
}
