import dotenv from 'dotenv';

dotenv.config();

const notFound = (req, res, next) => {
	const error = new Error(`Not Found: ${req.originalURL}`);
	res.status(404);
	next(error);

};

const errorHandler = (error, req, res, next) => {
	const statuscode = res.statusCode ===  200 ? 500 : res.statusCode;
	res.status(statuscode);
	res.json({
		statuscode: statuscode,
		message: error.message, 
		stacktrace: process.env.ENVIROMENT === 'PRODUCTION' ? 'Error' : error.stack,
	});
};

export default {
	notFound,
	errorHandler
};