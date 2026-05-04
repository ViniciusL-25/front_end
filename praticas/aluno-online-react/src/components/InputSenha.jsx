import "./InputSenha.css";

function InputSenha({ value, onChange, error }) {
  return (
    <div className="input-group">
      <label>Senha</label>
      <input type="password" value={value} onChange={onChange} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default InputSenha;
