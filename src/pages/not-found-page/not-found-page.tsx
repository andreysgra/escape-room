import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
          />
          <img
            src="img/content/maniac/maniac-size-m.jpg"
            srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
            width={1366}
            height={768}
            alt=""
          />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase">404</h1>
          <p className="title--size-s">Страница не найдена</p>
          <p className="quest-page__description">Она была удалена или вы&nbsp;указали неправильный адрес</p>
          <Link className="btn btn--accent btn--cta quest-page__btn" to={AppRoute.Main}>
            Вернуться&nbsp;на&nbsp;главную
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
