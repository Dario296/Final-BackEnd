import ServiceC from '../4Service/Cart.js';
import ServiceP from '../4Service/Product.js';

class Controler {

	async postProduct(req, res) {
		const user = req.user;
		const correo = user.username;
		const id = req.body.id;
		const product = await ServiceP.ReadById(id);
		const cart = await ServiceC.Read(correo);
		if (cart === undefined) {
			await ServiceC.Create(user);
		}
		await ServiceC.postProduct(correo, product);
		return res.redirect('/productos');
	}

	async deleteProduct(req, res) {
		const correo = req.user.username;
		const id = req.body.id;
		const product = await ServiceP.ReadById(id);
		await ServiceC.deleteProduct(correo, product);
		return res.redirect('/carrito');
	}

	async Read(req, res) {
		const correo = req.user.username;
		const result = await ServiceC.Read(correo);
		const avatar = req.user.photo;
		const saludo = `Bienvenido ${correo}`;
		return res.render('UserLogin/carrito', { result, avatar, saludo });
	}

	async Delete(req, res) {
		const correo = req.user.username;
		await ServiceC.Delete(correo);
		return res.redirect('/productos');
	}
}

export default new Controler();
