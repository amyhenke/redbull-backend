import express from "express";
import logger from "./middleware/logger.js";
import cards from "./routes/cards.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
import cors from "cors";

const PORT = process.env.PORT || 8000;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// Allow Cross-Origin Resource Sharing (CORS) or can't fetch from backend
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

// Routes
app.use("/api/cards", cards);

// Error middleware
// below routes to avoid conflicts
app.use(notFound); // non-existent endpoints
app.use(errorHandler); // errors within each route

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
