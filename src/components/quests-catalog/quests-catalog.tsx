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
import QuestsListEmpty from '../quests-list-empty/quests-list-empty';

function QuestsCatalog() {
  const quests = useAppSelector(getFilteredQuests);
  const isQuestsLoading = useAppSelector(getQuestsLoadingStatus) === RequestStatus.Pending;
  const isQuestsFailed = useAppSelector(getQuestsLoadingStatus) === RequestStatus.Error;
  const isQuestsSuccess = useAppSelector(getQuestsLoadingStatus) === RequestStatus.Success;

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

  if (quests.length === 0 && isQuestsSuccess) {
    return <QuestsListEmpty />;
  }

  return (
    <div className="cards-grid">
      {quests.map((quest: TQuest) => <QuestCard quest={quest} key={quest.id} />)}
    </div>
  );
}

export default QuestsCatalog;
