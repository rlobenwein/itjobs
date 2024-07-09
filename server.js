import express from 'express';
import db from './models/index.js';
import userRoutes from './src/routes/userRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', userRoutes);

db.sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor está rodando em http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar com o banco de dados:', err);
  });
