import Logger from '../0Config/Logger.js';
import Persistence from '../3Persistence/Chat.js';

class Service {

	async Create(sms) {
		try {
			const SMS = await Persistence.Read();
			if (SMS.length === 0) {
				const data = {
					author: {
						name: sms.author.name,
					},
					text: sms.text,
					fyh: new Date().toLocaleString(),
					id: 1,
				};
				const add = await Persistence.Create(data);
				return add;
			}
			const data = {
				author: {
					name: sms.author.name,
				},
				text: sms.text,
				fyh: new Date().toLocaleString(),
				id: 1,
			};
			const add = await Persistence.Create(data);
			return add;
		} catch (error) {
			Logger.error(`Error al guardar el mensaje: ${error}`);
		}
	}

	async Read() {
		try {
			const SMS = await Persistence.Read();
			return SMS;
		} catch (error) {
			Logger.error(`Error al leer los mensajes: ${error}`);
		}
	}
}

export default new Service();
