import './field-error-message.css';

type FieldErrorMessageProps = {
  message: string;
}

function FieldErrorMessage({message}: FieldErrorMessageProps) {
  return (
    <p className="error-description">{message}</p>
  );
}

export default FieldErrorMessage;
