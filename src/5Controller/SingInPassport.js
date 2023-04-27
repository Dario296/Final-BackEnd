import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bCrypt from 'bcrypt';
import Service from '../4Service/User.js';

export const login = new LocalStrategy(async (username, password, done) => {
	const user = await Service.Read(username);
	if (!user) {
		return done('no existe el usuario', false);
	}
	if (!isValidPassword(user, password)) {
		return done('Contraseña incorrecta', false);
	}
	return done(null, user);
});

passport.serializeUser((user, done) => {
	done(null, user.username);
});

passport.deserializeUser(async (username, done) => {
	const user = await Service.Read(username);
	return done(null,user);
});

function isValidPassword(user, password) {
	return bCrypt.compareSync(password, user.password);
}
