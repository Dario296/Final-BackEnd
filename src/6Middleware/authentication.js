export default function authentication(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		return res.redirect('/ingresar');
	}
}
