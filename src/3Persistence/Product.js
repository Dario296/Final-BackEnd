import Logger from '../0Config/Logger.js';
import DTO from '../1Dtos/Product.js';
import Model from '../2Model/Product.js';

class Persistence {
	async Create(data) {
		try {
			const addData = new Model(data);
			const add = await addData.save();
			return DTO(add);
		} catch (error) {
			Logger.error(`Error al guardar el producto: ${error}`);
		}
	}

	async Read() {
		try {
			const data = await Model.find();
			return DTO(data);
		} catch (error) {
			Logger.error(`Error al leer los productos: ${error}`);
		}
	}

	async ReadByName(name) {
		try {
			const data = await Model.find({ name: name });
			return DTO(data);
		} catch (error) {
			Logger.error(`Error al leer los productos: ${error}`);
		}
	}

	async ReadById(id) {
		try {
			const data = await Model.findById(id);
			return DTO(data);
		} catch (error) {
			Logger.error(`Error al leer los productos: ${error}`);
		}
	}

	async Update(id, data) {
		try {
			const update = await Model.findByIdAndUpdate(id, data);
			return DTO(update);
		} catch (error) {
			Logger.error(`Error al actualizar el producto: ${error}`);
		}
	}

	async Delete(id) {
		try {
			const deleteData = await Model.findByIdAndDelete(id);
			return DTO(deleteData);
		} catch (error) {
			Logger.error(`Error al borrar el producto: ${error}`);
		}
	}
}

export default new Persistence();
