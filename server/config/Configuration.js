import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const connectToDatabase = async () => {
	try {
		const DB_URL = process.env.DATABASE_URL;
		await mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
		console.log('Succesfully connected to the database!');
	}
	catch (error) {
		console.log('Failed to connect to database: ', error);
		process.exit();
	}
};

const connectToPort = (app) => {
	const port = process.env.PORT;
	app.listen(port, () => {
		console.log(`Server listening on port ${port}`);
	});
};

export default {
	connectToDatabase,
	connectToPort
};
