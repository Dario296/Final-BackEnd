import Logger from '../0Config/Logger.js';
import DTO from '../1Dtos/Chat.js';
import Model from '../2Model/Chat.js';

class Persistence {
	async Create(data) {
		try {
			const addData = new Model(data);
			const add = await addData.save();
			return DTO(add);
		} catch (error) {
			Logger.error(`Error al guardar el mensaje: ${error}`);
		}
	}

	async Read() {
		try {
			const data = await Model.find();
			return DTO(data);
		} catch (error) {
			Logger.error(`Error al leer los mensajes: ${error}`);
		}
	}
}

export default new Persistence();
