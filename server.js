import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { createServer } from 'http';
import { Server } from 'socket.io';
import passport from 'passport';
import Logger from './src/0Config/Logger.js';
import SessionConfig from './src/0Config/Session.js';
import Connections from './src/0Config/Mongo.js';
import ConnectionSocket from './src/5Controller/Socket.js';
import Home from './src/5Controller/Home.js';
import { productos, ingresar, registrarse, salir, carrito, compras, chat } from './src/7Router/Router.js';

Connections();

const app = express();
const PORT = process.argv[2] || 8080;
const httpServer = createServer(app);
const io = new Server(httpServer);

app.set('views', './views');
app.set('view engine', 'pug');

app.use(cookieParser());
app.use(session(SessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/registrarse', registrarse);
app.use('/ingresar', ingresar);
app.use('/productos', productos);
app.use('/salir', salir);
app.use('/carrito', carrito);
app.use('/compras', compras);
app.use('/mensajes', chat);

app.get('/', Home);

app.get('*', (req, res) => {
	res.send(`Ruta ${req.url}, ${req.method} no esta implementada`);
});

io.on('connection', ConnectionSocket);

httpServer.listen(PORT, () => {
	Logger.info(`RUN http://localhost:${PORT}`);
});