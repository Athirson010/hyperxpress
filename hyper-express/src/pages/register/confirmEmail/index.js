import React from 'react';
import { mask, masks } from 'utils/masks';

import Steps from 'components/Steps/index';
import Title from 'components/Title';
import Input from 'components/Input';
import imgEmail from './assets/email.svg';
import { Content, Flex, Right, Lefth } from './style';
import { Container } from '../basicData/style';
import { Link } from 'react-router-dom';
import { MotionDiv } from 'components/FramerMotion/index';
import { api } from 'api/api';

export default function ConfirmEmail({ register, errors, setValue , codigo}) {

const handleCodigo = async (evt) => {
    const { value } = evt.target;

    if(value == codigo){
      return console.log("Parabéns");
    }
    evt.target.value="";
    return console.log("Falhou!-!");
    
    
}





  return (
    <Container className="flexColumn">
      <Steps activeThree="active" />

      <Content>
        <Flex className="flex">
          <Lefth>
            <Title
              font="0.7"
              bold="normal"
              text="Falta pouco para realizar seu cadastro"
            />

            <p>
              Para finalizar seu cadastro, basta conferir o email informado no
              primeiro passo, e colocar o codigo que te enviamos aqui em baixo.
            </p>

            <div>
              <Input
                title="Código"
                id="codigo"
                name="codigo"
                type="number"
                placeholder="Somente números"
                onChange={(evt) => mask(setValue, 'codigo', evt, masks.codigo)}
                onBlur={handleCodigo}
                register={register}
                errors={errors.codigo}
              />
              <Link className="link" to="">
                Renviar código
              </Link>
            </div>
          </Lefth>

          <Right>
            <MotionDiv
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 20,
                damping: 5,
              }}
            >
              <img src={imgEmail} alt="Email" />
            </MotionDiv>
          </Right>
        </Flex>
      </Content>
    </Container>
  );
}
