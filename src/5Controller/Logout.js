import Service from '../4Service/Cart.js'

const Logout = async (req, res) => {
	const mail = req.user.username;
	const saludo = `Hasta luego ${mail}`;
	await Service.Delete(mail);
	req.logout((err) => {
		res.render('saludo', { saludo });
	});
};

export default Logout;
