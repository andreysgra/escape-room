import {DESCRIPTION_MAX_LENGTH, DESCRIPTION_MIN_LENGTH} from '../const';

export const getQuestDescription = (description: string) => {
  if (description.length < DESCRIPTION_MIN_LENGTH) {
    return description.padEnd(DESCRIPTION_MIN_LENGTH);
  }

  if (description.length > DESCRIPTION_MAX_LENGTH) {
    return description.slice(0, DESCRIPTION_MAX_LENGTH);
  }

  return description;
};
