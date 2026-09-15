import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import './reservations-empty.css';

function ReservationsEmpty() {
  return (
    <section className="reservations-empty">
      <div className="reservations-empty__wrap">
        <div className="reservations-empty__text">
          <p className="reservations-empty__description">
            Кажется, пока вы не добавили ни одного квеста
          </p>
          <Link className="btn btn--accent btn--cta quest-page__btn" to={AppRoute.Main}>Перейти к квестам</Link>
        </div>
      </div>
    </section>
  );
}

export default ReservationsEmpty;
