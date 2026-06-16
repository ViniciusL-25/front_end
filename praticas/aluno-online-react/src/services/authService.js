const URL = "http://localhost:3001/login";

export async function loginApi(email, password) {
  const resposta = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await resposta.json();

  if (!resposta.ok) {
    throw new Error(data.message || "Erro ao fazer login");
  }

  return data; // { token, user }
}