import {TReservations} from '../../types/reservation';
import {RequestStatus} from '../../services/api/const';

export type TReservationsState = {
  reservations: TReservations;
  loadingStatus: RequestStatus;
}
