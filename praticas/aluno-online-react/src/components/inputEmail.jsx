import "./InputEmail.css";

function InputEmail({ value, onChange, error }) {
  return (
    <div className="input-group">
      <label>Email</label>
      <input
        type="email"
        value={value}
        onChange={onChange}
        placeholder="Digite seu email"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default InputEmail;
