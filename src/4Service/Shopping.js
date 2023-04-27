import Logger from '../0Config/Logger.js';
import Persistence from '../3Persistence/Shopping.js';

class Service {

	async Create(data) {
		try {
			const newShopping = {
				compra: data,
			};
			const result = await Persistence.Create(newShopping);
			return result;
		} catch (error) {
			Logger.error(`Error al guardar la compra: ${error}`);
		}
	}
}

export default new Service();