import {TQuestDetailed} from '../../types/quest';
import {RequestStatus} from '../../services/api/const';

export type TQuestState = {
  quest: TQuestDetailed | null;
  loadingStatus: RequestStatus;
}
