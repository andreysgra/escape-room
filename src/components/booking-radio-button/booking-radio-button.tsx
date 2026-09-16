import {TSlot} from '../../types/slot';
import {BookingDate} from '../../const';

type BookingRadioButtonProps = {
  date: BookingDate;
  slot: TSlot;
}

function BookingRadioButton({date, slot}: BookingRadioButtonProps) {
  const {time, isAvailable} = slot;

  return (
    <label className="custom-radio booking-form__date">
      <input
        type="radio"
        id={`${date}${time}`}
        name="date"
        required
        value={`${date},${time}`}
        disabled={!isAvailable}
      />
      <span className="custom-radio__label">{time}</span>
    </label>
  );
}

export default BookingRadioButton;
