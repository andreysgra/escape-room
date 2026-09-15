import {QuestLevel, QuestLevelName} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getQuestLevel} from '../../store/site-process/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {ChangeEvent} from 'react';
import {setQuestLevel} from '../../store/site-process/slice';

function QuestFilterLevel() {
  const questLevel = useAppSelector(getQuestLevel);

  const dispatch = useAppDispatch();

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuestLevel(evt.currentTarget.value));
  };

  return (
    <ul className="filter__list">
      {Object.values(QuestLevel).map((level) => (
        <li className="filter__item" key={level}>
          <input
            type="radio"
            name="level"
            id={level}
            value={level}
            checked={questLevel === level}
            onChange={handleInputChange}
          />
          <label className="filter__label" htmlFor={level}>
            <span className="filter__label-text">{QuestLevelName[level]}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default QuestFilterLevel;
