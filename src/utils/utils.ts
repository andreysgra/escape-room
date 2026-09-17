import {QuestDescriptionLength, QuestType} from '../const';

export const getQuestDescription = (description: string) => {
  if (description.length < QuestDescriptionLength.Min) {
    return description.padEnd(QuestDescriptionLength.Min);
  }

  if (description.length > QuestDescriptionLength.Max) {
    return `${description.slice(0, QuestDescriptionLength.Max)}...`;
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
