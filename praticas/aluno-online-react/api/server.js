const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const users = require("./users.json");

const app = express();

app.use(cors());
app.use(express.json());

const SECRET = "minha_chave_super_secreta_jwt";

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const usuario = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!usuario) {
    return res.status(401).json({
      message: "Email ou senha inválidos",
    });
  }

  const token = jwt.sign(
    {
      id: usuario.id,
      email: usuario.email,
    },
    SECRET,
    { expiresIn: "1h" }
  );

  return res.status(200).json({
    token, 
    user: {
      id: usuario.id,
      email: usuario.email,
    },
  });
});

app.listen(3001, () => {
  console.log("API JWT rodando na porta 3001");
}); 