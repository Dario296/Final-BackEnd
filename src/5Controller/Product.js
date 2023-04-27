import Service from '../4Service/Product.js';

class Controller {

	async Create(req, res) {
		const product = req.body;
		await Service.Create(product);
		return res.redirect('/productos');
	}

	async Read(req, res) {
		const user = req.user;
		if (user === undefined) {
			const products = await Service.Read();
			return res.render('User/productosUser', { products });
		}
		const saludo = `Bienvenido ${user.username}`;
		const avatar = user.photo;
		if (user.admin === true) {
			const products = await Service.Read();
			return res.render('Admin/productosAdmin', { products, saludo, avatar });
		}
		const products = await Service.Read();
		return res.render('UserLogin/productosUserLogin', { products, saludo, avatar });
	}

	async ReadByName(req, res) {
		const name = req.query.nameb;
		const user = req.user;
		if (user === undefined) {
			const products = await Service.ReadByName(name);
			return res.render('User/productosUser', { products });
		}
		const saludo = `Bienvenido ${user.username}`;
		const avatar = user.photo;
		if (user.admin === true) {
			const products = await Service.ReadByName(name);
			return res.render('Admin/productosAdmin', { products, saludo, avatar });
		}
		const products = await Service.ReadByName(name);
		return res.render('UserLogin/productosUserLogin', { products, saludo, avatar });
	}

	async Update(req, res) {
		const product = req.body;
		const id = req.params.id;
		await Service.Update(id, product);
		return res.redirect('/productos');
	}

	async Delete(req, res) {
		const id = req.params.id;
		await Service.Delete(id);
		return res.redirect('/productos');
	}
}

export default new Controller();
