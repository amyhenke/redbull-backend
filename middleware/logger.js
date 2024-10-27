import colors from "colors";

const logger = (req, res, next) => {
    // Assign colour to a method
    const methodColours = {
        GET: "cyan",
        POST: "magenta",
        PUT: "brightBlue",
        DELETE: "red",
    };

    // Select colour based on req.method
    const colour = methodColours[req.method] || white;

    console.log(
        `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`[
            colour
        ]
    );

    // Must do for middleware - move to next middleware in stack
    next();
};

export default logger;
