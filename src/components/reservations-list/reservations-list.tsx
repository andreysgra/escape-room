import {useAppSelector} from '../../hooks/use-app-selector';
import {getReservations, getReservationsLoadingStatus} from '../../store/reservations/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {TReservation} from '../../types/reservation';
import ReservationCard from '../reservation-card/reservation-card';
import Loader from '../loader/loader';
import {fetchReservations} from '../../store/reservations/api-actions';
import {ErrorDescription} from '../../const';
import ErrorMessage from '../error-message/error-message';
import {useEffect} from 'react';
import {RequestStatus} from '../../services/api/const';

function ReservationsList() {
  const reservations = useAppSelector(getReservations);
  const isReservationsLoading = useAppSelector(getReservationsLoadingStatus) === RequestStatus.Pending;
  const isReservationsFailed = useAppSelector(getReservationsLoadingStatus) === RequestStatus.Error;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleButtonErrorClick = () => {
    dispatch(fetchReservations());
  };

  if (isReservationsLoading) {
    return <Loader />;
  }

  if (isReservationsFailed) {
    return <ErrorMessage description={ErrorDescription.Reservations} onButtonClick={handleButtonErrorClick} />;
  }

  return (
    <div className="cards-grid">
      {reservations.map((reservation: TReservation) =>
        <ReservationCard reservation={reservation} key={reservation.id} />)}
    </div>
  );
}

export default ReservationsList;
