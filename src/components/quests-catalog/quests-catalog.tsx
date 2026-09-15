import {TQuest} from '../../types/quest';
import QuestCard from '../quest-card/quest-card';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getFilteredQuests, getQuestsLoadingStatus} from '../../store/quests/selectors';
import Loader from '../loader/loader';
import ErrorMessage from '../error-message/error-message';
import {ErrorDescription} from '../../const';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {fetchQuests} from '../../store/quests/api-actions';
import {RequestStatus} from '../../services/api/const';

function QuestsCatalog() {
  const quests = useAppSelector(getFilteredQuests);
  const isQuestsLoading = useAppSelector(getQuestsLoadingStatus) === RequestStatus.Pending;
  const isQuestsFailed = useAppSelector(getQuestsLoadingStatus) === RequestStatus.Error;

  const dispatch = useAppDispatch();

  const handleButtonErrorClick = () => {
    dispatch(fetchQuests());
  };

  if (isQuestsLoading) {
    return <Loader />;
  }

  if (isQuestsFailed) {
    return <ErrorMessage description={ErrorDescription.Quests} onButtonClick={handleButtonErrorClick} />;
  }

  return (
    <div className="cards-grid">
      {quests.map((quest: TQuest) => <QuestCard quest={quest} key={quest.id} />)}
    </div>
  );
}

export default QuestsCatalog;
