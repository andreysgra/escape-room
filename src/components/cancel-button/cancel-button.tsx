type CancelButtonProps = {
  disabled?: boolean;
  onClick: () => void;
}

function CancelButton({disabled, onClick = () => undefined}: CancelButtonProps) {
  const handleButtonClick = () => onClick();

  return (
    <button
      className="btn btn--accent btn--secondary quest-card__btn"
      type="button"
      disabled={disabled}
      onClick={handleButtonClick}
    >
      Отменить
    </button>
  );
}

export default CancelButton;
