import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type LogoProps = {
  isRoot: boolean;
}

function Logo({isRoot}: LogoProps) {
  const logoImage = <svg width={134} height={52} aria-hidden="true"><use xlinkHref="#logo" /></svg>;

  return (
    isRoot ? (
      <span className="logo header__logo">
        {logoImage}
      </span>
    ) : (
      <Link className="logo header__logo" to={AppRoute.Main} aria-label="Перейти на Главную">
        {logoImage}
      </Link>
    )
  );
}

export default Logo;
