const express = require("express");
const exphbs = require("express-handlebars");
const connect = require("./db");

const User = require("./models/User");

const app = express();

// Middleware para processar dados de formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurando o motor de template Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Servindo arquivos estáticos
app.use(express.static("public"));

// Rota para a página inicial
app.get("/", async (req, res) => {
  const users = await User.findAll({ raw: true });
  res.render("home", { users: users });
});

app.get("/users/create", (req, res) => {
  res.render("adduser");
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });
  res.render("userview", { user });
});

app.post("/users/create", async (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  newsletter = newsletter === "on";

  await User.create({ name, occupation, newsletter });

  res.redirect("/");
});

module.exports = app;