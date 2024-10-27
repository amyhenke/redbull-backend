import express from "express";
import { cardData } from "../lib/cardData.js";

const router = express.Router();

// NOTE: all endpoints are prefixed with /api/cards (set in server.js)

// GET ALL CARDS
router.get("/", (req, res) => {
    res.status(200).json(cardData);
});

// GET SINGLE CARD
router.get("/:id", (req, res, next) => {
    // Get ID from param, change from string
    const id = parseInt(req.params.id);

    // change to use ORM
    const card = cardData.find((card) => card.id === id);

    // If post not found, use error handler
    if (!card) {
        const error = new Error(`Card ID (${id}) Not Found`);
        error.status = 404;
        return next(error);
    }

    // If card found, pass the card
    res.status(200).json(card);
});

// // CREATE NEW CARD
// router.post("/", (req, res, next) => {
//     // Access title from body
//     const newCard = {
//         id: cards.length + 1,
//         title: req.body.title,
//     };

//     // If title hasn't been set in body, show error
//     if (!newCard.title) {
//         const error = new Error("Please include a title");
//         error.status = 400;
//         return next(error);
//     }

//     cardData.push(newCard);

//     // 201 created
//     // Respond with cards - inc. newly created
//     res.status(201).json(cards);
// });

export default router;
