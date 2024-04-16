import { Router } from "express";
import { getAllNotes, addNote, updateNoteById, deleteNoteById } from '../controllers/notes.controller.js';
import fetchuser from "../middleware/fetchuser.js";
import { body } from 'express-validator';

const router = Router();

router.get('/fetchall-notes', fetchuser, getAllNotes);

router.post('/add-note', fetchuser,
    [
        body('title', 'Enter a valid title').isLength({ min: 3 }),
        body('description', 'Description must be atleast 5 characters').isLength({ min: 5 })
    ],
    addNote
);

router.put('/update-note/:id', fetchuser, updateNoteById);

router.delete('/delete-note/:id', fetchuser, deleteNoteById);

export default router;