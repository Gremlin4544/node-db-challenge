const server = require('./api/server.js');

const port = process.env.port || 5000;

server.get('/', (req, res) => {
    res.send(`API up and running on port ${port}`);
});

server.listen(port, ()=> console.log(`Server up and running on port ${port}`));