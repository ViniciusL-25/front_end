import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleEntrar = () =>{
    login({ username: "vinicius@iesb.br", password: "123456"});
    navigate("/");
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleEntrar}>Entrar</button>
    </>
  );
}

export default Login;
