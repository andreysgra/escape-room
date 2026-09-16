import {TSlot} from '../../types/slot';
import {BookingDate} from '../../const';
import {FieldValues, UseFormRegister} from 'react-hook-form';

type BookingRadioButtonProps = {
  date: BookingDate;
  slot: TSlot;
  register: UseFormRegister<FieldValues>;
}

function BookingRadioButton({date, slot, register}: BookingRadioButtonProps) {
  const {time, isAvailable} = slot;

  return (
    <label className="custom-radio booking-form__date">
      <input
        type="radio"
        id={`${date}${time}`}
        value={`${date},${time}`}
        disabled={!isAvailable}
        {...register(
          'date',
          {
            required: true,
          }
        )}
      />
      <span className="custom-radio__label">{time}</span>
    </label>
  );
}

export default BookingRadioButton;
