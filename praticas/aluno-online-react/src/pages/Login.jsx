import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
import "./Login.css";


import cap from "../assets/learn.svg";
import InputMatricula from "../components/InputMatricula";
import InputSenha from "../components/InputSenha";
import InputSubmit from "../components/InputSubmit";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [enviado, setEnviado] = useState(false);

  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const { login } = useAuth();

  const handleEntrar = () => {
  login({
    username: email,
    password: senha,
  });

  navigate("/dashboard");
};

  function validarEmail(valor) {
    return /\S+@\S+\.\S+/.test(valor);
  }
  
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    setEnviado(true);

    let valido = true;

    setErroEmail("");
    setErroSenha("");

    if (!email) {
      setErroEmail("O campo de email é obrigatório.");
      valido = false;
    } else if (!validarEmail(email)) {
      setErroEmail("Email inválido.");
      valido = false;
    }

    if (!senha) {
      setErroSenha("O campo de senha é obrigatório.");
      valido = false;
    } else if (senha.length < 6) {
      setErroSenha("A senha deve ter no mínimo 6 caracteres.");
      valido = false;
    }

    

    if (valido){
      handleEntrar();
    }
  }


  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src={cap} alt="Logo Aluno Online" />
        </div>
        <h2>Aluno Online</h2>

        <form onSubmit={handleSubmit}>
          <InputMatricula
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={enviado ? erroEmail : ""}
          />

          <InputSenha
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            error={enviado ? erroSenha : ""}
          />

          <InputSubmit />
        </form>
      </div>

      <div className="footer">© 2026. Todos os direitos reservados.</div>
    </div>
  );
}

export default Login;