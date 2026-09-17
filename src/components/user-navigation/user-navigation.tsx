import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getAuthorizationStatus, getUser} from '../../store/user/selectors';
import {AuthorizationStatus} from '../../services/api/const';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {logoutUser} from '../../store/user/api-actions';

function UserNavigation() {
  const isLoginPage = useLocation().pathname === AppRoute.Login as string;
  const isAuthorized = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;
  const user = useAppSelector(getUser);
  const currentPage = useLocation().pathname;

  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    if (isAuthorized) {
      dispatch(logoutUser());
    }
  };

  return (
    <div className="header__side-nav">
      {!isLoginPage && (isAuthorized ? (
        <Link
          className="btn btn--accent header__side-item"
          title={user?.email}
          to={currentPage}
          onClick={handleLogoutClick}
        >
          Выйти
        </Link>
      ) : (
        <Link
          className="btn header__side-item header__login-btn"
          to={AppRoute.Login}
        >
          Вход
        </Link>
      ))}
      <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
    </div>
  );
}

export default UserNavigation;
