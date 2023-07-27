// esse state jo sabko(sare components) accessible ho 
import React, { useState } from "react";
import NoteContext from "./NoteContext";
// import addNote from "../../Components/AddNote";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "64bff2207e2e0de1b17825b7b",
          "user": "64bec3655475ae669040dbe3",
          "title": "First New post",
          "description": "Hello this is my new first post",
          "tag": "personal",
          "date": "2023-07-25T16:02:40.034Z",
          "__v": 0
        },
        {
            "_id": "64bff2207e2e0de1b17851b7b",
            "user": "64bec3655475ae669040dbe3",
            "title": "First New post",
            "description": "Hello this is my new first post",
            "tag": "personal",
            "date": "2023-07-25T16:02:40.034Z",
            "__v": 0
        },
        {
            "_id": "64bff2207e2e0de1b1785b27b",
            "user": "64bec3655475ae669040dbe3",
            "title": "First New post",
            "description": "Hello this is my new first post",
            "tag": "personal",
            "date": "2023-07-25T16:02:40.034Z",
            "__v": 0
        },
        {
            "_id": "64bff2207e21e0de1b1785b7b",
            "user": "64bec3655475ae669040dbe3",
            "title": "First New post",
            "description": "Hello this is my new first post",
            "tag": "personal",
            "date": "2023-07-25T16:02:40.034Z",
            "__v": 0
        },
        {
            "_id": "64bff22071e2e0de1b1785b7b",
            "user": "64bec3655475ae669040dbe3",
            "title": "First New post",
            "description": "Hello this is my new first post",
            "tag": "personal",
            "date": "2023-07-25T16:02:40.034Z",
            "__v": 0
        },
        {
            "_id": "64bff22307e2e0de1b1785b7b",
            "user": "64bec3655475ae669040dbe3",
            "title": "First New post",
            "description": "Hello this is my new first post",
            "tag": "personal",
            "date": "2023-07-25T16:02:40.034Z",
            "__v": 0
        }
      ]

    const [notes, setNotes] = useState(notesInitial);

    // Add a Note;
    const addNote = (title, description, tag)=>{
        console.log("Adding a new note")
        const note={
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
    const deleteNote = ()=>{

    }
    // Edit a Note;
    const editNote = ()=>{
        
    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;