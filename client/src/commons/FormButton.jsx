function FormButton({ children, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className="btn">
      {children}
    </button>
  );
}

export default FormButton;
