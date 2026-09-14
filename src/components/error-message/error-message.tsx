import './error-message.css';

type ErrorMessageProps = {
  description?: string;
  onButtonClick?: () => void;
}

function ErrorMessage({description, onButtonClick}: ErrorMessageProps) {
  return (
    <section className="error-message">
      <div className="error-message__wrap">
        <div className="error-message__text">
          <h2 className="error-message__title title--size-s">Что-то пошло не так</h2>
          <p className="error-message__description">{description}</p>
          <button className="btn btn--accent btn--cta quest-page__btn" type="button" onClick={onButtonClick}>
            Обновить
          </button>
        </div>
      </div>
    </section>
  );
}

export default ErrorMessage;
