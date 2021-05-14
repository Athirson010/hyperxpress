import Header from 'components/Header';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'components/Button';
import { Container, FormContent } from './style';
import report from './images/report.svg';
import { Input, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { MotionContent, itemsAnimation } from 'components/FramerMotion';
import axios from 'axios';
import { api } from 'api/api';

export default function Report() {
  const [chamadoData, setChamadoData] = useState({
    nome: '',
    assunto: '',
    email: '',
    mensagem: '',
  });

  function handle(e) {
    const newChamado = { ...chamadoData };
    newChamado[e.target.id] = e.target.value;
    setChamadoData(newChamado);
    console.log(newChamado);
  }

  function postChamado(e) {
    e.preventDefault();
    api.post("/report", {
        nome: chamadoData.nome,
        assunto: chamadoData.assunto,
        email: chamadoData.email,
        mensagem: chamadoData.mensagem,
      })
      .then((resposta) => {
        console.log('Resposta', resposta.data);
        
      });
  }

  return (
    <Container>
      <Header />
      <div className="report">
        <div className="flex container">
          <div className="container">
            <div className="titulo">
              <h2>Suporte Hyper Express</h2>
            </div>

            <FormContent>
              <form onSubmit={(e) => postChamado(e)}>
                <MotionContent variants={itemsAnimation}>
                  <select className="Select" id="osuporte" name="suporte" id="assunto" onChange={(e) => handle(e)} value={chamadoData.assunto}>
                    <option  name="osuporte" value="Reportar falha">Reportar falha no sistema</option>
                    <option  name="osuporte" value="Preciso de ajuda">Precisa de ajuda?</option>
                    <option  name="osuporte" value="Feedback">Feedback</option>
                  </select>
                </MotionContent>

                <MotionContent variants={itemsAnimation}>
                  <label>
                  <Input placeholder="Como deseja ser chamado" type="text"  onChange={(e) => handle(e)} id="nome" value={chamadoData.nome}/>
                  </label>
                </MotionContent>

                <MotionContent variants={itemsAnimation}>
                  <label>
                  <Input placeholder="Insira seu e-mail" type="text"  onChange={(e) => handle(e)} id="email" value={chamadoData.email}/>
                  </label>
                </MotionContent>

                <MotionContent variants={itemsAnimation}>
                  <TextArea  onChange={(e) => handle(e)}
                    placeholder="Mensagem"
                    id="mensagem"
                    value={chamadoData.mensagem}
                    rows={5}
                  />
                </MotionContent>

                <MotionContent variants={itemsAnimation}>
                  <center>
                    <Button type="submit">Enviar</Button>
                  </center>
                </MotionContent>
              </form>
            </FormContent>
          </div>
          <div className="ImgReport">
            <img src={report} />
          </div>
        </div>
      </div>
    </Container>
  );
}
