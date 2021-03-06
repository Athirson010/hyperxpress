import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaBasic, SchemaLocal, SchemaCodigo } from 'utils/schema';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/auth';

import { notificationError, notificationSuccess } from 'utils/notifications';
import Title from 'components/Title';
import BasicData from './basicData';
import LocalData from './localData';
import ConfirmEmail from './confirmEmail';
import ThanksData from './thanks';
import ButtonSecundary from 'components/ButtonSecundary';
import Button from 'components/Button';
import { Container, Box, ContentForm } from './style';
import { api } from 'api/api';

export default function Register() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const [codigo, setCodigo] = useState(0);
  const [form, setForm] = useState();

  const isValid = useCallback(() => {
    if (currentStep === 0) {
      return SchemaBasic;
    } else if (currentStep === 1) {
      return SchemaLocal;
    } else {
      return SchemaCodigo;
    }
  }, [currentStep]);

  const { register, handleSubmit, errors, setValue } = useForm({
    // resolver: yupResolver(isValid()),
  });

  const onSubmit = async (data) => {
    const { confirmSenha, ...forms } = { ...data };

    setForm((basicData) => {
      return { ...basicData, ...forms };
    });

    if (currentStep === 1) {
      const { data } = await api.get(`/emails/enviar?email=${form.email}`);
      setCodigo(data);
    }

    if (currentStep === 2) {
      try {
        await api.post('/usuarios', form);
        await signIn(form);

        notificationSuccess(
          'Parabéns cadastro realizado',
          'Seu login ja foi efetuado',
        );
      } catch (error) {
        console.log(error);

        return notificationError(
          'Ops, ocorreu um erro',
          'Não foi possivel completar seu cadastro',
        );
      }
    }

    setCurrentStep(currentStep + 1);
  };

  const componentForms = [
    <BasicData register={register} errors={errors} setValue={setValue} />,
    <LocalData register={register} errors={errors} setValue={setValue} />,
    <ConfirmEmail
      register={register}
      errors={errors}
      setValue={setValue}
      codigo={codigo}
    />,
    <ThanksData register={register} errors={errors} setValue={setValue} />,
  ];

  return (
    <Container className="flexColumn">
      <Box>
        <Title subText="Sua roupa da melhor forma" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <ContentForm>{componentForms[currentStep]}</ContentForm>

          <div className="flex">
            {currentStep > 2 ? (
              <div className="buttons">
                <ButtonSecundary onClick={() => navigate('/')}>
                  Comprar
                </ButtonSecundary>

                <Button onClick={() => navigate('/')}>Anunciar</Button>
              </div>
            ) : (
              <Button>Continuar</Button>
            )}
          </div>
        </form>
      </Box>
    </Container>
  );
}
