

    const url = "http://localhost:3000/requerimento"


    export async function criarRequerimento(data){
    try {
        const resposta = await fetch(url, {
            method: "POST", 
            body: JSON.stringify(data), // converte JS p/ JSON
            headers: { "content-type": "application/json" }
        });
        return await resposta.json();
        } catch(error) {
            return { message: `Não foi possível enviar o formulário! ${error.code}-${error.message}` };
        }
    }

    export async function listarRequerimento() {
        const resposta = await fetch(url);
        return await resposta.json();
    }
