import React from 'react';
import { Container, Google } from './style';
import { useAuth } from 'hooks/auth';
import { useNavigate } from 'react-router-dom';

function GoogleButton() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSuccess = (response) => {
    const {
      profileObj: { name, email, imageUrl },
    } = response;

    setUser({
      avatar: name,
      email: email,
      img: imageUrl,
    });

    navigate('/');
  };

  const handleFailure = (response) => {
    console.log(response);
  };

  return (
    <Container>
      <Google
        clientId="656505838824-mqrqs93bc6lujvbbpgvee8be2u4pkr18.apps.googleusercontent.com"
        buttonText="Login com Google"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
      />
    </Container>
  );
}

export default GoogleButton;
