import express from "express";
// import {
//     getCards,
//     getCard,
//     getCardBySlug,
// } from "../controllers/cardController.js";
import { getCards, getCardBySlug } from "../controllers/cardController.js";

const router = express.Router();

// NOTE: all endpoints are prefixed with /api/cards (set in server.js)

// GET ALL CARDS
router.get("/", getCards);

// GET SINGLE CARD BY ID
// router.get("/:id", getCard);

// GET SINGLE CARD BY SLUG
router.get("/:slug", getCardBySlug);

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
