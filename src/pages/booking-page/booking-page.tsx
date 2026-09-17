import {useParams} from 'react-router-dom';
import {getBookings, getBookingsLoadingStatus} from '../../store/booking/selectors';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getQuest, getQuestLoadingStatus} from '../../store/quest/selectors';
import {RequestStatus} from '../../services/api/const';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useEffect} from 'react';
import {fetchBookings} from '../../store/booking/api-actions';
import {fetchQuest} from '../../store/quest/api-actions';
import Loader from '../../components/loader/loader';
import ErrorMessage from '../../components/error-message/error-message';
import {ErrorDescription} from '../../const';
import {TQuestDetailed} from '../../types/quest';
import MapBooking from '../../components/map-booking/map-booking';
import BookingForm from '../../components/booking-form/booking-form';

function BookingPage() {
  const id = useParams().id as string;

  const bookings = useAppSelector(getBookings);
  const quest = useAppSelector(getQuest);
  const isBookingLoading = useAppSelector(getBookingsLoadingStatus) === RequestStatus.Pending;
  const isBookingFailed = useAppSelector(getBookingsLoadingStatus) === RequestStatus.Error;
  const isQuestLoading = useAppSelector(getQuestLoadingStatus) === RequestStatus.Pending;
  const isQuestFailed = useAppSelector(getQuestLoadingStatus) === RequestStatus.Error;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchBookings(id));
      dispatch(fetchQuest(id));
    }
  }, [dispatch, id]);

  const handleButtonErrorClick = () => {
    dispatch(fetchBookings(id));
    dispatch(fetchQuest(id));
  };

  if (!isBookingFailed && !isQuestFailed) {
    if (bookings.length === 0 || !quest) {
      return null;
    }
  }

  if (isBookingLoading && isQuestLoading) {
    return <Loader />;
  }

  if (isBookingFailed || isQuestFailed) {
    return <ErrorMessage description={ErrorDescription.Booking} onButtonClick={handleButtonErrorClick} />;
  }

  const {
    title,
    coverImg,
    coverImgWebp,
  } = quest as TQuestDetailed;

  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet={`${coverImgWebp}, ${coverImgWebp} 2x`}/>
          <img src={coverImg} srcSet={`${coverImg} 2x`} width={1366} height={768} alt={title}/>
        </picture>
      </div>
      <div className="container container--size-s">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста</h1>
          <p className="title title--size-m title--uppercase page-content__title">{title}</p>
        </div>
        <div className="page-content__item">
          <MapBooking />
        </div>
        <BookingForm />
      </div>
    </main>
  );
}

export default BookingPage;
