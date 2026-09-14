import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {FormEvent} from 'react';
import {loginUser} from '../../store/user/api-actions';
import {getLoginStatus} from '../../store/user/selectors';
import {useAppSelector} from '../../hooks/use-app-selector';
import {RequestStatus} from '../../services/api/const';
import {TUserAuth} from '../../types/user';
import {toast} from 'react-toastify';
import {ErrorDescription} from '../../const';
import {setLoginStatus} from '../../store/user/slice';

function LoginForm() {
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector(getLoginStatus);

  const isLoginPending = loginStatus === RequestStatus.Pending;
  const isLoginFailed = loginStatus === RequestStatus.Error;

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = Object.fromEntries(new FormData(evt.currentTarget)) as TUserAuth;

    dispatch(loginUser(formData));
  };

  if (isLoginFailed) {
    toast.dismiss();
    toast.error(ErrorDescription.Login);

    dispatch(setLoginStatus(RequestStatus.Idle));
  }

  return (
    <form className="login-form" action="#" method="post" onSubmit={handleFormSubmit}>
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
              name="email"
              placeholder="Адрес электронной почты"
              required
            />
          </div>
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="password">
              Пароль
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Пароль"
              required
            />
          </div>
        </div>
        <button className="btn btn--accent btn--general login-form__submit" type="submit" disabled={isLoginPending}>
          Войти
        </button>
      </div>
      <label className="custom-checkbox login-form__checkbox">
        <input
          type="checkbox"
          id="id-order-agreement"
          name="user-agreement"
          required
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
