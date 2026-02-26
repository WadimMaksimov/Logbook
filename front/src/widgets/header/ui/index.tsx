import { Link } from 'react-router';
import logotip from '@/shared/img/logotip.png';
import * as Styled from './styled';

export const Header = () => {
  return (
    <div>
      <Styled.LinkLogo to="/">
        <img src={logotip} alt="Logotip" />
      </Styled.LinkLogo>
      <nav>
        <ul>
          <li>
            <Link to="#">О нас</Link>
          </li>
          <li>
            <Link to="#">Контакты</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button>Войти</button>
      </div>
    </div>
  );
};
