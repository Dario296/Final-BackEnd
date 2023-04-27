import { Router } from 'express';
import passport from 'passport';
import multer from 'multer';
import Cart from '../5Controller/Cart.js';
import Chat from '../5Controller/Chat.js';
import Logout from '../5Controller/Logout.js';
import Product from '../5Controller/Product.js';
import Shopping from '../5Controller/Shopping.js';
import SingIn from '../5Controller/SingIn.js';
import { login } from '../5Controller/SingInPassport.js';
import SingUp from '../5Controller/SingUp.js';
import { register } from '../5Controller/SingUpPassport.js';
import authentication from '../6Middleware/authentication.js';

passport.use('register', register);
passport.use('login', login);

const upload = multer({ dest: './public/img/' });

const productos = Router();
const ingresar = Router();
const registrarse = Router();
const salir = Router();
const carrito = Router();
const compras = Router();
const chat = Router();

productos.get('/', Product.Read);
productos.get('/:busqueda', Product.ReadByName);
productos.post('/', authentication, Product.Create);
productos.put('/:id', authentication, Product.Update);
productos.delete('/:id', authentication, Product.Delete);

ingresar.get('/', SingIn.SingIn);
ingresar.post('/', passport.authenticate('login', { failureRedirect: '/ingresar/errorIngresar', successRedirect: '/' }));
ingresar.get('/errorIngresar', SingIn.Error);

registrarse.get('/', SingUp.SignUp);
registrarse.post('/', upload.single('photo'), passport.authenticate('register', { failureRedirect: 'registrarse/errorRegistro', successRedirect: '/' }));
registrarse.get('/errorRegistro', SingUp.Error);

salir.get('/', Logout);

carrito.get('/', authentication, Cart.Read);
carrito.post('/', authentication, Cart.postProduct);
carrito.post('/producto', authentication, Cart.deleteProduct);
carrito.delete('/', authentication, Cart.Delete);

compras.post('/', authentication, Shopping.Create);

chat.get('/', authentication, Chat);

export { productos, ingresar, registrarse, salir, carrito, compras, chat };
