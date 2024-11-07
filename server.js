const express = require('express');  
const app = express();  
const db = require('./db');  

const PORT = process.env.PORT || 3000;

app.use(express.json());

// teste 
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Vote Verde!');
});

// rota candidatos
app.get('/candidatos', (req, res) => {
    db.query('SELECT * FROM Candidatos', (err, results) => {  
        if (err) {
            console.log(err);
            return res.status(500).send('Erro ao acessar o banco de dados');
        }
        console.log(results); 
        res.json(results); 
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});