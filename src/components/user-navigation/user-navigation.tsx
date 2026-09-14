import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';

type UserNavigationProps = {
  isAuthorized: boolean;
}

function UserNavigation({isAuthorized}: UserNavigationProps) {
  const isLoginPage = useLocation().pathname === AppRoute.Login as string;

  return (
    <div className="header__side-nav">
      {!isLoginPage && (isAuthorized ? (
        <Link className="btn btn--accent header__side-item" to={AppRoute.Main}>Выйти</Link>
      ) : (
        <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>
      ))}
      <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
    </div>
  );
}

export default UserNavigation;
