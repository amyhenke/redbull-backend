// Middleware to handle endpoints that don't exist
const notFound = (req, res, next) => {
    const error = new Error("Endpoint Not Found");
    error.status = 404;
    next(error);
};

export default notFound;
