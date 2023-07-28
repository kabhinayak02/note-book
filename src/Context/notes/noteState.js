// esse state jo sabko(sare components) accessible ho 
import React, { useState } from "react";
import NoteContext from "./NoteContext";
// import addNote from "../../Components/AddNote";

const NoteState = (props) => {
    const host = "http://localhost:8000"
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial); // Notes States

    // Get a Note;
    const getNotes = async () => {

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: { 
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZWMzNjU1NDc1YWU2NjkwNDBkYmUzIn0sImlhdCI6MTY5MDI1MTc4OX0.3Pi44wQSSQIterheiY-L3fRpqEscbuxn4K8qlP8QPKY',
            },
        });
        const json = await response.json();
        console.log(json)
        setNotes(json)
    }

    // Add a Note;
    const addNote = async (title, description, tag) => {

        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            header: {
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZWMzNjU1NDc1YWU2NjkwNDBkYmUzIn0sImlhdCI6MTY5MDI1MTc4OX0.3Pi44wQSSQIterheiY-L3fRpqEscbuxn4K8qlP8QPKY',

            },
            body: JSON.stringify({title, description, tag})
        });

        console.log("Adding a new note")
        const note = {
            "_id": "64bff2232307e2e0de1b1785b7b",
            "user": "64bec3655475ae669040dbe3",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-07-25T16:02:40.034Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    // Delete a Note;
    const deleteNote = (id) => {

        console.log("Delete button is working with " + id);
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote)
    }

    // Edit a Note;
    const editNote = async (id, title, description, tag) => {

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            header: {
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZWMzNjU1NDc1YWU2NjkwNDBkYmUzIn0sImlhdCI6MTY5MDI1MTc4OX0.3Pi44wQSSQIterheiY-L3fRpqEscbuxn4K8qlP8QPKY',

            },
            body: JSON.stringify({title, description, tag})
        });
        const json = await response.json();

        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id == id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;