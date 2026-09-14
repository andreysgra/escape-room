import HeaderNavigation from '../header-navigation/header-navigation';
import UserNavigation from '../user-navigation/user-navigation';
import Logo from '../logo/logo';
import {useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';

function Header() {
  const isRoot = useLocation().pathname === AppRoute.Main as string;

  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo isRoot={isRoot} />
        <HeaderNavigation />
        <UserNavigation />
      </div>
    </header>

  );
}

export default Header;
