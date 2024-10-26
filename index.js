const connect = require("./db.js");
const app = require("./app.js");

async function startServer() {
  try {
    await connect.sync();
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  } catch (erro) {
    console.log("Erro ao iniciar o servidor:", erro);
  }
}

startServer();
