import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';
import classNames from 'classnames';

type HeaderNavigationProps = {
  isAuthorized: boolean;
}

function HeaderNavigation({isAuthorized}: HeaderNavigationProps) {
  const {pathname} = useLocation();

  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <Link
            className={classNames('link', {'active': pathname === AppRoute.Main as string})}
            to={AppRoute.Main}
          >
            Квесты
          </Link>
        </li>
        <li className="main-nav__item">
          <Link
            className={classNames('link', {'active': pathname === AppRoute.Contacts as string})}
            to={AppRoute.Contacts}
          >
            Контакты
          </Link>
        </li>
        {isAuthorized && (
          <li className="main-nav__item">
            <Link
              className={classNames('link', {'active': pathname === AppRoute.MyQuests as string})}
              to={AppRoute.MyQuests}
            >
              Мои бронирования
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
