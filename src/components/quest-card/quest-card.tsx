import {TQuest} from '../../types/quest';
import {AppRoute, QuestLevelName, RouteParam} from '../../const';
import {Link} from 'react-router-dom';

type QuestCardProps = {
  quest: TQuest;
}

function QuestCard({quest}: QuestCardProps) {
  const {
    id,
    title,
    previewImg,
    previewImgWebp,
    level,
    peopleMinMax,
  } = quest;

  const [peopleMin, peopleMax] = peopleMinMax;
  const link = AppRoute.Quest.replace(RouteParam.Id, id);

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
        </div>
        <ul className="tags quest-card__tags">
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
      </div>
    </div>
  );
}

export default QuestCard;
