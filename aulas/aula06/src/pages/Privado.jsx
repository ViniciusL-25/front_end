import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

function Privado() {
    const { logado } = useAuthContext();

    return <>
        {logado ? (<Outlet />) : (<Navigate to="/login" />)}
    </>
}

export default Privado;