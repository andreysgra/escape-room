import {TQuests} from '../../types/quest';
import {RequestStatus} from '../../services/api/const';

export type TQuestsState = {
  quests: TQuests;
  loadingStatus: RequestStatus;
}
