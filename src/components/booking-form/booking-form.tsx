import {ErrorDescription, ValidationPattern} from '../../const';
import BookingSlotsList from '../../components/booking-slots-list/booking-slots-list';
import {TSlots} from '../../types/slot';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getCurrentBooking} from '../../store/booking/selectors';
import {useForm} from 'react-hook-form';
import FieldErrorMessage from '../field-error-message/field-error-message';
import {getQuest} from '../../store/quest/selectors';
import {TQuestDetailed} from '../../types/quest';
import {useEffect} from 'react';

function BookingForm() {
  const currentBooking = useAppSelector(getCurrentBooking);
  const quest = useAppSelector(getQuest);

  const {peopleMinMax: [peopleMin, peopleMax]} = quest as TQuestDetailed;

  const {
    register,
    resetField,
    formState: {
      errors,
      isValid
    },
  } = useForm({mode: 'onChange'});

  useEffect(() => {
    resetField('date');
  }, [resetField, currentBooking]);

  return (
    <form
      className="booking-form"
      action="#"
      method="post"
    >
      <BookingSlotsList slots={currentBooking?.slots as TSlots} register={register} />
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">
            Ваше имя
          </label>
          <input
            type="text"
            id="name"
            placeholder="Имя"
            {...register(
              'name',
              {
                required: true,
                pattern: ValidationPattern.Name,
                minLength: {
                  value: 1,
                  message: ErrorDescription.NameMinLength
                },
                maxLength: {
                  value: 15,
                  message: ErrorDescription.NameMaxLength
                }
              }
            )}
          />
          {errors.name && <FieldErrorMessage message={errors.name?.message as string || ErrorDescription.Name} />}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">
            Контактный телефон
          </label>
          <input
            type="tel"
            id="tel"
            placeholder="+7 (900) 000-00-00"
            {...register(
              'tel',
              {
                required: true,
                pattern: ValidationPattern.PhoneNumber,
              }
            )}
          />
          {errors.tel && <FieldErrorMessage message={ErrorDescription.PhoneNumber} />}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">
            Количество участников
          </label>
          <input
            type="number"
            id="person"
            placeholder={`Количество участников ${peopleMin} – ${peopleMax}`}
            {...register(
              'person',
              {
                required: true,
                min: {
                  value: peopleMin,
                  message: `Минимальное число участников: ${peopleMin}`
                },
                max: {
                  value: peopleMax,
                  message: `Максимальное число участников: ${peopleMax}`
                }
              }
            )}
          />
          {errors.person &&
            <FieldErrorMessage message={errors.person?.message as string ||
              `${ErrorDescription.PeopleMinMax} ${peopleMin} – ${peopleMax}`}
            />}
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            type="checkbox"
            id="children"
            {...register(
              'children'
            )}
          />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick"/>
            </svg>
          </span>
          <span className="custom-checkbox__label">
            Со&nbsp;мной будут дети
          </span>
        </label>
      </fieldset>
      <button
        className="btn btn--accent btn--cta booking-form__submit"
        type="submit"
        disabled={!isValid}
      >
        Забронировать
      </button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input
          type="checkbox"
          id="id-order-agreement"
          {...register(
            'user-agreement',
            {
              required: true
            }
          )}
        />
        <span className="custom-checkbox__icon">
          <svg width={20} height={17} aria-hidden="true">
            <use xlinkHref="#icon-tick"/>
          </svg>
        </span>
        <span className="custom-checkbox__label">
          Я&nbsp;согласен с&nbsp;
          <a className="link link--active-silver link--underlined" href="#">
            правилами обработки персональных данных
          </a>
          &nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export default BookingForm;
