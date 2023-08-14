const app = require("./src/app");

// Configurar a porta em que o servidor irá escutar
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}.`);
});
