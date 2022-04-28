function FormButton({ children, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} style={{ height: "35px" }}>
      {children}
    </button>
  );
}

export default FormButton;
