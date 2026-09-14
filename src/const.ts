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
  Email = 'Введите валидный email',
  Login = 'Невозможно авторизоваться на сайте',
  Quests = 'Невозможно загрузить список квестов',
  Password = 'Пароль должен содержать минимум одну букву и одну цифру',
  PasswordMinLength = 'Минимальная длина 3 символа',
  PasswordMaxLength = 'Максимальная длина 15 символов',
}

export const QuestLevelName: Record<string, string> = {
  [QuestLevel.All]: 'Любой',
  [QuestLevel.Easy]: 'Лёгкий',
  [QuestLevel.Medium]: 'Средний',
  [QuestLevel.Hard]: 'Сложный',
};

export const ValidationPattern = {
  Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  Password: /^(?=.*[a-zA-Z])(?=.*\d)(?=.+$)/,
} as const;
