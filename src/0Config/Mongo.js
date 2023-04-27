import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Logger from './Logger.js';

dotenv.config();

const MONGO = process.env.MONGO;

const Connections = async () => {
	try {
		mongoose.set('strictQuery', false);
		mongoose.connect(MONGO, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		Logger.info('MongoDb Connected');
	} catch (error) {
		Logger.error('Error connecting to database', error);
	}
};

export default Connections;
