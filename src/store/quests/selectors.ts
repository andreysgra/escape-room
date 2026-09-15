import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {createSelector} from '@reduxjs/toolkit';
import {getQuestLevel, getQuestType} from '../site-process/selectors';
import {QuestLevel, QuestType} from '../../const';
import {TQuest} from '../../types/quest';

const storeSlice = StoreSlice.Quests;

export const getQuests = (state: State) => state[storeSlice].quests;

export const getQuestsLoadingStatus = (state: State) =>
  state[storeSlice].loadingStatus;

export const getFilteredQuests = createSelector(
  [getQuests, getQuestType, getQuestLevel],
  (quests, questType, questLevel) => {
    const filteredQuests = questType !== QuestType.All ?
      quests.filter((quest) => quest.type === questType) : quests;

    if (questLevel === QuestLevel.All) {
      return filteredQuests;
    }

    return filteredQuests.filter((quest: TQuest) => quest.level === questLevel);
  }
);
