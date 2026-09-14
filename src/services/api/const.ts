export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum RequestStatus {
  Error = 'Error',
  Idle = 'Idle',
  Pending = 'Pending',
  Success = 'Success'
}

export const BASE_URL = 'https://grading.design.htmlacademy.pro/v1/escape-room';

export const REQUEST_TIMEOUT = 5000;
