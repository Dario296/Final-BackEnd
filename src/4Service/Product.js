import Logger from '../0Config/Logger.js';
import Persistence from '../3Persistence/Product.js';

class Service {

	async Create(product) {
		try {
			const data = {
				timestamp: Date.now(),
				name: product.name.toLowerCase().charAt(0).toUpperCase() + product.name.slice(1),
				description: product.description,
				code: product.code,
				price: product.price,
				photo: product.photo,
				stock: product.stock,
			};
			const add = await Persistence.Create(data);
			return add;
		} catch (error) {
			Logger.error(`Error al guardar el producto: ${error}`);
		}
	}

	async Read() {
		try {
			const read = await Persistence.Read();
			return read;
		} catch (error) {
			Logger.error(`Error al leer los productos: ${error}`);
		}
	}

	async ReadByName(name) {
		try {
			const data = name
			const Name = data.toLowerCase().charAt(0).toUpperCase() + data.slice(1);
			const read = await Persistence.ReadByName(Name);
			return read;
		} catch (error) {
			Logger.error(`Error al leer los productos: ${error}`);
		}
	}

	async ReadById(id) {
		try {
			const read = await Persistence.ReadById(id);
			return read;
		} catch (error) {
			Logger.error(`Error al leer los productos: ${error}`);
		}
	}

	async Update(id, product) {
		try {
			const data = {
				timestamp: Date.now(),
				name: product.name.toLowerCase().charAt(0).toUpperCase() + product.name.slice(1),
				description: product.description,
				code: product.code,
				price: product.price,
				photo: product.photo,
				stock: product.stock,
			};
			const update = await Persistence.Update(id, data);
			return update;
		} catch (error) {
			Logger.error(`Error al actualizar el producto: ${error}`);
		}
	}

	async Delete(id) {
		try {
			const deleteData = await Persistence.Delete(id);
			return deleteData;
		} catch (error) {
			Logger.error(`Error al eliminar el producto: ${error}`);
		}
	}
}

export default new Service();
