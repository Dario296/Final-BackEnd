import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import dotenv from 'dotenv';
import { Correo } from '../4Service/Nodemailer.js';
import Service from '../4Service/User.js';

dotenv.config();

const USER = process.env.USER;
const service = Service;

export const register = new LocalStrategy({ passReqToCallback: true }, async (req, username, password, done) => {
	const data = req.body;
	const user = await service.Read(username);
	const url = req.file.path;
	const subject = 'Nuevo Usuario Registrado';
	const mensaje = `<h1 style="color: blue;">Se ha registrado un nuevo usuario ${data.name}, ${data.lastName}, ${data.address}, ${data.age}, ${data.phoneNumber}</h1>`;
	if (user) {
		return done('el usuario ya esta registrado', false);
	}
	const newUser = await service.Create(data, url);
	// await Correo(USER, subject, mensaje);
	return done(null, newUser);
});

passport.serializeUser((user, done) => {
	done(null, user.username);
});

passport.deserializeUser(async (username, done) => {
	const user = await service.Read(username);
	done(null, user);
});
