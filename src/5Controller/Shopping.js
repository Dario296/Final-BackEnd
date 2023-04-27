import ServiceC from '../4Service/Cart.js';
import { Correo } from '../4Service/Nodemailer.js';
import ServiceS from '../4Service/Shopping.js';

class Controler {

	async Create(req, res) {
		const mail = req.user.username;
		const cart = await ServiceC.Read(mail);
		const shopping = await ServiceS.Create(cart);
		if (shopping) {
			const asunto = `Compra exitosa ${shopping.id}`;
			const mensaje = `<h1 style="color: blue;"> Hola ${mail}, tu compra ha sido exitosa, su id de confirmacion es ${shopping.id}. Compraste el/los Productos ${shopping.productos.map((p)=>{return ` ${p.name} $${p.price}`})}</h1>`;
			await Correo(mail, asunto, mensaje);
		}
		const confirmacion = `tu compra ha sido exitosa, su id de confirmacion es ${shopping.id} le llegara una copia a su correo`;
		await ServiceC.Delete(mail);
		return res.render('UserLogin/compra', { confirmacion });
	}
}

export default new Controler();
