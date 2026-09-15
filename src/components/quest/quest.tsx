import {useAppSelector} from '../../hooks/use-app-selector';
import {getQuest, getQuestLoadingStatus} from '../../store/quest/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {fetchQuest} from '../../store/quest/api-actions';
import {useEffect} from 'react';
import Loader from '../loader/loader';
import {AppRoute, ErrorDescription, QuestLevelName, QuestTypeName, RouteParam} from '../../const';
import {Link} from 'react-router-dom';
import ErrorMessage from '../error-message/error-message';
import {TQuestDetailed} from '../../types/quest';
import {RequestStatus} from '../../services/api/const';
import {getQuestDescription} from '../../utils/utils';

type QuestProps = {
  id: string;
}

function Quest({id}: QuestProps) {
  const quest = useAppSelector(getQuest);
  const isQuestLoading = useAppSelector(getQuestLoadingStatus) === RequestStatus.Pending;
  const isQuestFailed = useAppSelector(getQuestLoadingStatus) === RequestStatus.Error;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuest(id));
  }, [id, dispatch]);

  if (!quest && !isQuestFailed) {
    return null;
  }

  const handleButtonErrorClick = () => {
    dispatch(fetchQuest(id));
  };

  if (isQuestLoading) {
    return <Loader />;
  }

  if (isQuestFailed) {
    return <ErrorMessage description={ErrorDescription.Quest} onButtonClick={handleButtonErrorClick} />;
  }

  const {
    title,
    level,
    type,
    peopleMinMax,
    description,
    coverImg,
    coverImgWebp,
  } = quest as TQuestDetailed;

  const [peopleMin, peopleMax] = peopleMinMax;
  const link = AppRoute.Booking.replace(RouteParam.Id, id);

  return (
    <>
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet={`${coverImgWebp}, ${coverImgWebp} 2x`}/>
          <img src={coverImg} srcSet={`${coverImg} 2x`} width={1366} height={768} alt={title}/>
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
          <p className="subtitle quest-page__subtitle">
            <span className="visually-hidden">Жанр:</span>{QuestTypeName[type]}
          </p>
          <ul className="tags tags--size-l quest-page__tags">
            <li className="tags__item">
              <svg width={11} height={14} aria-hidden="true">
                <use xlinkHref="#icon-person"/>
              </svg>
              {peopleMin}–{peopleMax}&nbsp;чел
            </li>
            <li className="tags__item">
              <svg width={14} height={14} aria-hidden="true">
                <use xlinkHref="#icon-level"/>
              </svg>
              {QuestLevelName[level]}
            </li>
          </ul>
          <p className="quest-page__description">{getQuestDescription(description)}</p>
          <Link className="btn btn--accent btn--cta quest-page__btn" to={link}>
            Забронировать
          </Link>
        </div>
      </div>
    </>
  );
}

export default Quest;
