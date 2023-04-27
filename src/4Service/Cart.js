import Logger from '../0Config/Logger.js';
import Persistence from '../3Persistence/Cart.js';

class Service {

	async Create(user) {
		try {
			const data = {
				author: {
					name: user.name,
					lastName: user.lastName,
					address: user.address,
					phoneNumber: user.phoneNumber,
					username: user.username,
				},
				productos: [],
				timestamp: Date.now(),
			};
			const add = await Persistence.Create(data);
			return add;
		} catch (error) {
			Logger.error(`Error al guardar el carrito: ${error}`);
		}
	}

	async Read(user) {
		try {
			const data = await Persistence.Read(user);
			return data;
		} catch (error) {
			Logger.error(`Error al leer el carrito: ${error}`);
		}
	}

	async postProduct(user, data) {
		try {
			const add = await Persistence.Update(user, { $push: { productos: data } });
			return add;
		} catch (error) {
			Logger.error(`Error al guardar el producto: ${error}`);
		}
	}

	async deleteProduct(user, data) {
		try {
			const add = await Persistence.Update(user, { $pull: { productos: data } });
			return add;
		} catch (error) {
			Logger.error(`Error al borrar el producto: ${error}`);
		}
	}

	async Delete(user) {
		try {
			const data = await Persistence.Delete(user);
			return data;
		} catch (error) {
			Logger.error(`Error al borrar el carrito: ${error}`);
		}
	}
}

export default new Service();