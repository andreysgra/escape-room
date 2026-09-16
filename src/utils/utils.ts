import {DESCRIPTION_MAX_LENGTH, DESCRIPTION_MIN_LENGTH, QuestType} from '../const';

export const getQuestDescription = (description: string) => {
  if (description.length < DESCRIPTION_MIN_LENGTH) {
    return description.padEnd(DESCRIPTION_MIN_LENGTH);
  }

  if (description.length > DESCRIPTION_MAX_LENGTH) {
    return description.slice(0, DESCRIPTION_MAX_LENGTH);
  }

  return description;
};

export const getQuestTypeIconWidth = (type: QuestType): number => {
  switch (type) {
    case QuestType.Adventures:
      return 36;
    case QuestType.All:
      return 26;
    case QuestType.Detective:
      return 40;
    case QuestType.SciFi:
      return 28;
    default:
      return 30;
  }
};

export const splitBookingDateValue = (value: string) => {
  const [date, time] = value.split(',');

  return {
    date,
    time,
  };
};
