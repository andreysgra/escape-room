import {TReservation} from '../../types/reservation';
import {AppRoute, BookingDateName, QuestLevelName, RouteParam} from '../../const';
import {Link} from 'react-router-dom';

type ReservationCardProps = {
  reservation: TReservation;
}

function ReservationCard({reservation}: ReservationCardProps) {
  const {
    date,
    time,
    peopleCount,
    location,
    quest,
  } = reservation;

  const {
    id: questId,
    title,
    previewImg,
    previewImgWebp,
    level,
  } = quest;

  const {address} = location;

  const link = AppRoute.Quest.replace(RouteParam.Id, questId);

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp} 2x`}/>
          <img src={previewImg} srcSet={`${previewImg} 2x`} width={344} height={232} alt={title}/>
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={link}>
            {title}
          </Link>
          <span className="quest-card__info">
            [{BookingDateName[date]},&nbsp;{time}. {address}]
          </span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person"/>
            </svg>
            {peopleCount}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level"/>
            </svg>
            {QuestLevelName[level]}
          </li>
        </ul>
        <button className="btn btn--accent btn--secondary quest-card__btn" type="button">
          Отменить
        </button>
      </div>
    </div>
  );
}

export default ReservationCard;
