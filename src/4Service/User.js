import Logger from '../0Config/Logger.js';
import Persistence from '../3Persistence/User.js';
import bCrypt from 'bcrypt';

function createHash(password) {
	return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

class Service {

	async Create(user, url) {
		try {
			const newUser = {
				name: user.name,
				lastName: user.lastName,
				address: user.address,
				age: user.age,
				phoneNumber: user.phoneNumber,
				photo: url.slice(6),
				username: user.username,
				password: createHash(user.password),
				admin: true,
			};
			const add = await Persistence.Create(newUser);
			return add;
		} catch (error) {
			Logger.error(`Error al guardar usuario: ${error}`);
		}
	}

	async Read(correo) {
		try {
			const user = await Persistence.Read(correo);
			return user;
		} catch (error) {
			Logger.error(`Error al leer usuario: ${error}`);
		}
	}
}

export default new Service();
