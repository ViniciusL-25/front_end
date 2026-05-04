import "./InputMatricula.css";

function InputMatricula({ value, onChange, error }) {
  return (
    <div className="input-group">
      <label>E-mail</label>
      <input type="text" value={value} onChange={onChange} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default InputMatricula;
