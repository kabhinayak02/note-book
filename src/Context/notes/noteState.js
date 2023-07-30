// esse state jo sabko(sare components) accessible ho 
import React, { useState } from "react";
import NoteContext from "./noteContext";
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
            headers: {
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZWMzNjU1NDc1YWU2NjkwNDBkYmUzIn0sImlhdCI6MTY5MDI1MTc4OX0.3Pi44wQSSQIterheiY-L3fRpqEscbuxn4K8qlP8QPKY',

            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json)

        console.log("Adding a new note")
        const note = json;
        setNotes(notes.concat(note))
    }

    // Delete a Note;
    const deleteNote = async (id) => {

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZWMzNjU1NDc1YWU2NjkwNDBkYmUzIn0sImlhdCI6MTY5MDI1MTc4OX0.3Pi44wQSSQIterheiY-L3fRpqEscbuxn4K8qlP8QPKY',

            },
        });
        const json = await response.json();
        console.log(json);
        console.log("Delete button is working with " + id);
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote)
    }

    // Edit a Note;
    const editNote = async (id, title, description, tag) => {

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZWMzNjU1NDc1YWU2NjkwNDBkYmUzIn0sImlhdCI6MTY5MDI1MTc4OX0.3Pi44wQSSQIterheiY-L3fRpqEscbuxn4K8qlP8QPKY',

            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
            
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;