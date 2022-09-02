const express = require('express');
const server = express();

server.get('/', (req,res) =>  {
    return res.json({mensagem: 'API esta funcionando'})
});

server.listen(3001, () => {
    console.log('Servidor esta funcionando...')
});