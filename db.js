const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',  
  user: 'root',  
  password: 'mp230904',  
  database: 'vote_verde'  
});

connection.connect((err) => {
  if (err) {
    console.log('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados com sucesso');
});

// proutros arquivos
module.exports = connection;
