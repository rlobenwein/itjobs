// Importe o Express.js
const express = require('express');
const app = express();
const port = 3000;

// Defina uma rota básica
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});

