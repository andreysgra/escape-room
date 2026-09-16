import {TSlots} from '../../types/slot';
import BookingRadioButton from '../booking-radio-button/booking-radio-button';
import {BookingDate, BookingDateName} from '../../const';

type BookingSlotsListProps = {
  slots: TSlots;
}

function BookingSlotsList({slots}: BookingSlotsListProps) {
  return (
    <>
      {Object.entries(slots).map(([date, slot]) => (
        <fieldset className="booking-form__section" key={date}>
          <legend className="booking-form__date-title">{BookingDateName[date]}</legend>
          <div className="booking-form__date-inner-wrapper">
            {slot.map(({time, isAvailable}) => (
              <BookingRadioButton date={date as BookingDate} slot={{time, isAvailable}} key={time} />
            ))}
          </div>
        </fieldset>
      ))}
    </>
  );
}

export default BookingSlotsList;
