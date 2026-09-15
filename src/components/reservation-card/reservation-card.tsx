import {TReservation} from '../../types/reservation';
import {AppRoute, BookingDateName, ErrorDescription, QuestLevelName, RouteParam} from '../../const';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useEffect, useState} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector';
import {toast} from 'react-toastify';
import {RequestStatus} from '../../services/api/const';
import {setCancelingStatus} from '../../store/reservations/slice';
import {cancelReservation} from '../../store/reservations/api-actions';
import {getReservationCancelingStatus} from '../../store/reservations/selectors';
import CancelButton from '../cancel-button/cancel-button';

type ReservationCardProps = {
  reservation: TReservation;
}

function ReservationCard({reservation}: ReservationCardProps) {
  const {
    id,
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

  const dispatch = useAppDispatch();

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [buttonId, setButtonId] = useState<string>('');
  const isCancelPending = useAppSelector(getReservationCancelingStatus) === RequestStatus.Pending;
  const isCancelFailed = useAppSelector(getReservationCancelingStatus) === RequestStatus.Error;

  useEffect(() => {
    if (buttonId === id) {
      setButtonDisabled(isCancelPending);
    }

    if (!isCancelPending) {
      setButtonId('');
    }
  }, [isCancelPending, id, buttonId]);

  const handleButtonClick = () => {
    dispatch(cancelReservation(id));
    setButtonId(id);
  };

  if (isCancelFailed) {
    toast.dismiss();
    toast.error(ErrorDescription.CancelReservation);

    dispatch(setCancelingStatus(RequestStatus.Idle));
  }

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
        <CancelButton disabled={buttonDisabled} onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default ReservationCard;
