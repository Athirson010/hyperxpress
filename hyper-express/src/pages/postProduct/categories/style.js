import styled from 'styled-components';
import { Menu } from 'antd';

export const Container = styled.div`
  /* height: 40rem; */
  background: #0006;
`;

export const MenuAntd = styled(Menu)`
  /* margin: 1rem 0; */
  background: red;

  i {
    background: var(--purple);
  }

  li {
    li {
      background: blue;
      margin-top: 4rem;
    }
  }
`;
