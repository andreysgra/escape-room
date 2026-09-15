import {TQuest} from '../../types/quest';

export type TSiteProcessState = {
  questType: TQuest['type'] | null;
  questLevel: TQuest['level'] | null;
}
