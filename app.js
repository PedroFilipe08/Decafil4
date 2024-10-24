const express = require('express');
const path = require('path');

const app = express();

// Middleware para servir arquivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));

// Rotas principais
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/login.html'));
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
