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
  Booking = 'Невозможно загрузить информацию о бронировании квеста',
  BookingQuest = 'Невозможно забронировать квест',
  CancelReservation = 'Невозможно отменить бронирование',
  Email = 'Введите валидный email',
  Login = 'Невозможно авторизоваться на сайте',
  Name = 'Введите корректное имя',
  NameMinLength = 'Минимальная длина имени 1 символ',
  NameMaxLength = 'Максимальная длина имени 15 символов',
  Quests = 'Невозможно загрузить список квестов',
  Password = 'Пароль должен содержать минимум одну букву и одну цифру',
  PasswordMinLength = 'Минимальная длина 3 символа',
  PasswordMaxLength = 'Максимальная длина 15 символов',
  PeopleMinMax = 'Количество участников:',
  PhoneNumber = 'Номер телефона должен быть в формате +7 (900) 000-00-00',
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
  Name: /^[А-Яа-яЁёA-Za-z -']{1,15}$/,
  Password: /^(?=.*[a-zA-Z])(?=.*\d)(?=.+$)/,
  PhoneNumber: /^(\+7)(\(9\d{2}\))(\d{3}-)(\d{2}-)(\d{2})$/,
} as const;

export const MapIcon = {
  UrlDefault: 'img/svg/pin-default.svg',
  UrlCurrent: 'img/svg/pin-active.svg',
  Size: [23, 42] as [number, number],
  Anchor: [11.5, 42] as [number, number]
} as const;

export const DESCRIPTION_MIN_LENGTH = 50;

export const DESCRIPTION_MAX_LENGTH = 300;

export const ContactsLocation: [number, number] = [59.968322, 30.317359];

export const TILE_LAYER_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export const MAP_CONTACTS_ZOOM = 16;

export const MAP_BOOKING_ZOOM = 10;
