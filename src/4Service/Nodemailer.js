import Logger from '../0Config/Logger.js';
import { transporter } from '../0Config/Nodemailer.js';

export const Correo = async (to, subject, sms) => {
	const mail = {
		from: 'Servidor Node.js',
		to: to,
		subject: subject,
		html: sms,
	};

	try {
		const mensaje = await transporter.sendMail(mail);
		return mensaje;
	} catch (error) {
		Logger.error(`error al enviar correo: ${error}`);
	}
};
