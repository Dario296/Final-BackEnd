import Logger from '../0Config/Logger.js';
import DTO from '../1Dtos/Shopping.js';
import Model from '../2Model/Shopping.js';

class Persistence {
	async Create(data) {
		try {
			const addData = new Model(data);
			const add = await addData.save();
			return DTO(add);
		} catch (error) {
			Logger.error(`Error al guardar la compra: ${error}`);
		}
	}
}

export default new Persistence();
