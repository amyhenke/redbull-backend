// Middleware to handle errors
// Passing in 'error' means will run have 'new Error()'
const errorHandler = (error, req, res, next) => {
    if (error.status) {
        res.status(error.status).json({ message: error.message });
    } else {
        res.status(500).json({ message: error.message });
    }

    next();
};

export default errorHandler;
