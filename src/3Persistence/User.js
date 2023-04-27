import Logger from '../0Config/Logger.js';
import DTO from '../1Dtos/User.js';
import Model from '../2Model/User.js';

class Persistence {
	async Create(data) {
		try {
			const addData = new Model(data);
			const add = await addData.save();
			return DTO(add);
		} catch (error) {
			Logger.error(`Error al guardar usuario: ${error}`);
		}
	}

	async Read(user) {
		try {
			const data = await Model.findOne({ username: user });
			return DTO(data);
		} catch (error) {
			Logger.error(`Error al buscar usuario: ${error}`);
		}
	}
}

export default new Persistence();
