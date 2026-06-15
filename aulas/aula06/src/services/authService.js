const url = "http://localhost:3000/usuarios";

async function entrar(credenciais) {
  const resposta = await fetch(`${url}?email=${credenciais.email}`);
  const usuario = await resposta.json();
  // isso eh feito no backend
  if (
    usuario[0]?.email === credenciais.email &&
    usuario[0]?.senha == credenciais.senha
  ) {
    return {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30",
      mensagem: "login com sucesso"  
    };
  }

  return { token: null, mensagem: "credenciais invalidas" };
}

export { entrar };