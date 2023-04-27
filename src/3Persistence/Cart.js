import Logger from '../0Config/Logger.js';
import DTO from '../1Dtos/Cart.js';
import Model from '../2Model/Cart.js';

class Persistence {
	async Create(data) {
		try {
			const cart = new Model(data);
			const add = await cart.save();
			return DTO(add);
		} catch (error) {
			Logger.error(`Error al guardar el carrito: ${error}`);
		}
	}

	async Read(user) {
		try {
			const cart = await Model.findOne({ 'author.username': user });
			return DTO(cart);
		} catch (error) {
			Logger.error(`Error al buscar el carrito: ${error}`);
		}
	}

	async Update(user, data) {
		try {
			const cart = await Model.findOneAndUpdate({ 'author.username': user }, data);
			return DTO(cart);
		} catch (error) {
			Logger.error(`Error al actualizar el carrito: ${error}`);
		}
	}

	async Delete(user) {
		try {
			const cart = await Model.deleteOne({ 'author.username': user });
			return DTO(cart);
		} catch (error) {
			Logger.error(`Error al eliminar el carrito: ${error}`);
		}
	}
}

export default new Persistence();
