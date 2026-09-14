export enum AppRoute {
  Booking = '/quest/:id/booking',
  Contacts = '/contacts',
  Login = '/login',
  Main = '/',
  MyQuests = '/my-quests',
  NotFound = '*',
  Quest = '/quest/:id',
}

export enum PageTitle {
  Booking = 'Бронирование квеста – Escape Room',
  Contacts = 'Контакты – Escape Room',
  Login = 'Авторизация – Escape Room',
  Main = 'Главная – Escape Room',
  MyQuests = 'Мои бронирования – Escape Room',
  Quest = 'Квест – Escape Room',
}

export enum RouteParam {
  Id = ':id',
}

export enum QuestLevel {
  All = 'all',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export enum ErrorDescription {
  Quests = 'Невозможно загрузить список квестов',
}

export const QuestLevelName: Record<string, string> = {
  [QuestLevel.All]: 'Любой',
  [QuestLevel.Easy]: 'Лёгкий',
  [QuestLevel.Medium]: 'Средний',
  [QuestLevel.Hard]: 'Сложный',
};
