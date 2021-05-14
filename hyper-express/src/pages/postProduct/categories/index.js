import React, { useState } from 'react';
import { Menu } from 'antd';

import { Container, MenuAntd } from './style';

export default function Categories() {
  const { SubMenu } = Menu;

  // submenu keys of first level
  const rootSubmenuKeys = ['1', '2', '3', '4', '5'];

  const [openKeys, setOpenKeys] = useState(['Camisetas ']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Container>
      <MenuAntd mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
        <SubMenu key="1" title="Blusas">
          <Menu.Item key="1">Moletom</Menu.Item>
          <Menu.Item key="2">Corta Vento</Menu.Item>
          <Menu.Item key="3">Invernal</Menu.Item>
          <Menu.Item key="4">Moletom com toca</Menu.Item>
          <Menu.Item key="5">Moletom com ziper</Menu.Item>
          <Menu.Item key="6">Lã</Menu.Item>
          <Menu.Item key="7">Sem manga</Menu.Item>
          <Menu.Item key="8">Terno</Menu.Item>
          <Menu.Item key="9">Sobre tudo</Menu.Item>
        </SubMenu>

        <SubMenu key="2" title="Camisas">
          <Menu.Item key="10">Blusinha</Menu.Item>
          <Menu.Item key="11">Regata</Menu.Item>
          <Menu.Item key="12">Manga longa</Menu.Item>
          <Menu.Item key="13">Social</Menu.Item>
          <Menu.Item key="14">Normal</Menu.Item>
          <Menu.Item key="15">Poliester</Menu.Item>
          <Menu.Item key="16">Algodão</Menu.Item>
          <Menu.Item key="17">Time</Menu.Item>
          <Menu.Item key="18">Polo</Menu.Item>
          <Menu.Item key="19">Com toca</Menu.Item>
        </SubMenu>

        <SubMenu key="3" title="Bermudas">
          <Menu.Item key="20">Jeans</Menu.Item>
          <Menu.Item key="21">Tactel</Menu.Item>
          <Menu.Item key="22">Moletom</Menu.Item>
          <Menu.Item key="23">Sarja</Menu.Item>
        </SubMenu>

        <SubMenu key="4" title="Calças">
          <Menu.Item key="24">Jeans</Menu.Item>
          <Menu.Item key="25">Moletom</Menu.Item>
          <Menu.Item key="26">Tactel</Menu.Item>
          <Menu.Item key="27">Sarja</Menu.Item>
          <Menu.Item key="28">Social</Menu.Item>
          <Menu.Item key="29">Legging</Menu.Item>
        </SubMenu>

        <SubMenu key="5" title="Calçados">
          <Menu.Item key="30">Tenis</Menu.Item>
          <Menu.Item key="31">Sapato</Menu.Item>
          <Menu.Item key="32">Sandalia</Menu.Item>
          <Menu.Item key="34">Bota</Menu.Item>
          <Menu.Item key="35">Cuturno</Menu.Item>
          <Menu.Item key="36">Sapatenis</Menu.Item>
        </SubMenu>
      </MenuAntd>
    </Container>
  );
}
