import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {loginUser} from '../../store/user/api-actions';
import {getLoginStatus} from '../../store/user/selectors';
import {useAppSelector} from '../../hooks/use-app-selector';
import {RequestStatus} from '../../services/api/const';
import {TUserAuth} from '../../types/user';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {ErrorDescription, ValidationPattern} from '../../const';
import FieldErrorMessage from '../field-error-message/field-error-message';
import {toast} from 'react-toastify';
import {setLoginStatus} from '../../store/user/slice';

function LoginForm() {
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector(getLoginStatus);

  const isLoginPending = loginStatus === RequestStatus.Pending;
  const isLoginFailed = loginStatus === RequestStatus.Error;

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid
    }
  } = useForm({mode: 'onChange'});

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    const {email, password} = data as TUserAuth;

    dispatch(loginUser({email, password}));
  };

  if (isLoginFailed) {
    toast.dismiss();
    toast.error(ErrorDescription.Login);

    dispatch(setLoginStatus(RequestStatus.Idle));
  }

  return (
    <form className="login-form" action="#" method="post" onSubmit={(evt) => {
      handleSubmit(handleFormSubmit)(evt);
    }}
    >
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">Вход</h1>
        <div className="login-form__inputs">
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="email">
              E&nbsp;–&nbsp;mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Адрес электронной почты"
              {...register(
                'email',
                {
                  required: true,
                  pattern: ValidationPattern.Email
                })
              }
            />
            {errors.email && <FieldErrorMessage message={ErrorDescription.Email} />}
          </div>
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="password">
              Пароль
            </label>
            <input
              type="password"
              id="password"
              placeholder="Пароль"
              {...register(
                'password',
                {
                  required: true,
                  pattern: ValidationPattern.Password,
                  minLength: {
                    value: 3,
                    message: ErrorDescription.PasswordMinLength
                  },
                  maxLength: {
                    value: 15,
                    message: ErrorDescription.PasswordMaxLength
                  }
                })
              }
            />
            {errors.password &&
              <FieldErrorMessage message={errors.password?.message as string || ErrorDescription.Password} />}
          </div>
        </div>
        <button
          className="btn btn--accent btn--general login-form__submit"
          type="submit"
          disabled={isLoginPending || !isValid}
        >
          Войти
        </button>
      </div>
      <label className="custom-checkbox login-form__checkbox">
        <input
          type="checkbox"
          id="id-order-agreement"
          {...register(
            'agreement',
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
          <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>
          &nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export default LoginForm;
