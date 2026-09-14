export type TQuest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: [number, number];
}

export type TQuests = TQuest[];

export type TQuestDetailed = TQuest & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
}
