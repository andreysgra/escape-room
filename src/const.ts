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

export enum QuestType {
  All = 'all-quests',
  Adventures = 'adventures',
  Horror ='horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export enum BookingDate {
  Today = 'today',
  Tomorrow = 'tomorrow',
}

export enum ErrorDescription {
  Email = 'Введите валидный email',
  Login = 'Невозможно авторизоваться на сайте',
  Quests = 'Невозможно загрузить список квестов',
  Password = 'Пароль должен содержать минимум одну букву и одну цифру',
  PasswordMinLength = 'Минимальная длина 3 символа',
  PasswordMaxLength = 'Максимальная длина 15 символов',
  Quest = 'Невозможно загрузить описание квеста',
  Reservations = 'Невозможно загрузить список забронированных квестов',
}

export const QuestLevelName: Record<string, string> = {
  [QuestLevel.All]: 'Любой',
  [QuestLevel.Easy]: 'Лёгкий',
  [QuestLevel.Medium]: 'Средний',
  [QuestLevel.Hard]: 'Сложный',
};

export const QuestTypeName: Record<string, string> = {
  [QuestType.Adventures]: 'Приключения',
  [QuestType.All]: 'Все квесты',
  [QuestType.Detective]: 'Детектив',
  [QuestType.Horror]: 'Ужасы',
  [QuestType.Mystic]: 'Мистика',
  [QuestType.SciFi]: 'Sci-Fi',
};

export const BookingDateName: Record<string, string> = {
  [BookingDate.Today]: 'Сегодня',
  [BookingDate.Tomorrow]: 'Завтра',
};

export const ValidationPattern = {
  Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  Password: /^(?=.*[a-zA-Z])(?=.*\d)(?=.+$)/,
} as const;

export const DESCRIPTION_MIN_LENGTH = 50;

export const DESCRIPTION_MAX_LENGTH = 300;
