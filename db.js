const mongoose = require("mongoose");

mongoose.connect("mongodb://192.168.0.6/coderfinal");

mongoose.connection.on("open", () => {
  console.log("Conectado a mongodb");
});

mongoose.connection.on("error", () => {
  console.log("Error de conexión");
});