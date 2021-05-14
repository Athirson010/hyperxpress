import React from 'react';
import { useAuth } from 'hooks/auth';
import { DownOutlined, LogoutOutlined } from '@ant-design/icons';

import { Avatar as AvatarAntd, Dropdown } from 'antd';
import { Content, Drop, MenuAntd } from './style';
import { Link } from 'react-router-dom';

export default function Avatar() {
  const { user, singOut } = useAuth();

  const menu = (
    <MenuAntd>
      {!user.id && (
        <MenuAntd.Item>
          <Drop>
            <Link to="/register">Meu cadastro</Link>
          </Drop>
        </MenuAntd.Item>
      )}

      <MenuAntd.Item>
        <Drop onClick={singOut}>
          <p>Logout</p>
          <LogoutOutlined />
        </Drop>
      </MenuAntd.Item>
    </MenuAntd>
  );

  return (
    <Dropdown overlay={menu}>
      <Content>
        <AvatarAntd size={32} src={user.img} />
        <span>{user.avatar}</span>

        <DownOutlined />
      </Content>
    </Dropdown>
  );
}
