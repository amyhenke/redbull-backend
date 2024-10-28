// Controller controls whatever a particular route is doing
// status sending, any headers etc.
// Interacts with model to get the data to send back
// import { findAll, findById, findBySlug } from "../models/cardModel.js";
import { findAll, findBySlug } from "../models/cardModel.js";

// @desc    Gets All Cards
// @routes  GET api/cards
export const getCards = async (req, res) => {
    try {
        const cards = await findAll();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Gets Single Card By ID
// @routes  GET api/cards/:id
// export const getCard = async (req, res) => {
//     // Get ID from param, change from string
//     const id = parseInt(req.params.id);

//     try {
//         const card = await findById(id);

//         if (!card) {
//             res.status(404).json({ message: error.message });
//         } else {
//             res.status(200).json(card);
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(404).json({ message: error.message });
//     }
// };

// @desc    Gets Single Card By Slug
// @routes  GET api/cards/:slug
export const getCardBySlug = async (req, res) => {
    const slug = req.params.slug;

    try {
        const card = await findBySlug(slug);

        if (!card) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(200).json(card);
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};
