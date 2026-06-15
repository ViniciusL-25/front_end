import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../contexts/AuthContext';

function Login() {
    const [erro, setErro] = useState();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { login } = useAuthContext();

    const entrar = async (dados) => {
        try {
            await login(dados);
            navigate("/produtos");
            setErro("");
        } catch (error) {
            setErro(error.message);
        }
    }
    return <>
        <h1>Login</h1>
        <p>{erro}</p>
        <form onSubmit={handleSubmit(entrar)}>
            <input
                type="email"
                placeholder="E-mail"
                {...register("email")}
            />
            <input
                type="password"
                placeholder="Senha"
                {...register("senha")}
            />
            <button type="submit">Entrar</button>
        </form>
    </>
}

export default Login;