import Service from '../4Service/Chat.js';

const service = Service;

const ConnectionSocket = async (socket) => {
	const listaMensajes = await service.Read();
	socket.emit('messages', listaMensajes);
	socket.on('new-message', async (data) => {
		await service.Create(data);
	});
};

export default ConnectionSocket;
