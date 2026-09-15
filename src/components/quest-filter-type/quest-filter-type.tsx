import {QuestType, QuestTypeName} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getQuestType} from '../../store/site-process/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {setQuestType} from '../../store/site-process/slice';
import {ChangeEvent} from 'react';
import {getQuestTypeIconWidth} from '../../utils/utils';

function QuestFilterType() {
  const questType = useAppSelector(getQuestType);

  const dispatch = useAppDispatch();

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuestType(evt.currentTarget.value));
  };

  return (
    <ul className="filter__list">
      {Object.values(QuestType).map((type) => (
        <li className="filter__item" key={type}>
          <input
            type="radio"
            name="type"
            id={type}
            value={type}
            checked={questType === type}
            onChange={handleInputChange}
          />
          <label className="filter__label" htmlFor={type}>
            <svg className="filter__icon" width={getQuestTypeIconWidth(type)} height={30} aria-hidden="true">
              <use xlinkHref={`#icon-${type}`} />
            </svg>
            <span className="filter__label-text">{QuestTypeName[type]}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default QuestFilterType;
