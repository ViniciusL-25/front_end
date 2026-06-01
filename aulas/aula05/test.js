import { criar, listar, obter, atualizar, remover } from "./cliente.js";

async function main() {
    console.log("Criar um produto...")
    let resposta = await criar({
        nome: "banana",
        preco: 10.99,
        unidade: "kg"
        });
    console.log(resposta)

    console.log("Listar produtos...");
    resposta = await listar();
    console.log(resposta)


    console.log("Obter um produto...");
    resposta = await obter(resposta[0]);
    console.log(resposta);


    console.log("Atualizar um produto...");
    resposta.nome = "banana prata";
    resposta.preco = 11.99;
    resposta = await atualizar(resposta);
    console.log (resposta);

    console.log("Remover um produto...");
    resposta = await remover(resposta);
    console.log(resposta);
}

main();