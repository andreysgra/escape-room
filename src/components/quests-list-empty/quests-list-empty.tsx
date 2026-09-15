import './quests-list-empty.css';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {setQuestLevel, setQuestType} from '../../store/site-process/slice';
import {QuestLevel, QuestType} from '../../const';

function QuestsListEmpty() {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(setQuestType(QuestType.All));
    dispatch(setQuestLevel(QuestLevel.All));
  };

  return (
    <section className="quests-list-empty">
      <div className="quests-list-empty__wrap">
        <div className="quests-list-empty__text">
          <p className="quests-list-empty__description">
            По выбранным фильтрам ничего не найдено
          </p>
          <button className="btn btn--accent btn--cta quest-page__btn" type="button" onClick={handleButtonClick}>
            Сбросить фильтры
          </button>
        </div>
      </div>
    </section>
  );
}

export default QuestsListEmpty;
