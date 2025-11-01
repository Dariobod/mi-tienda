const jsonServer = require('json-server');
const server = jsonServer.create();
// Apuntamos a tu archivo de datos principal
const router = jsonServer.router('db.json'); 
const middlewares = jsonServer.defaults();

// Render asigna el puerto en process.env.PORT. Usamos 3000 como respaldo local.
const port = process.env.PORT || 3000; 

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server está corriendo en el puerto ${port}`);
});