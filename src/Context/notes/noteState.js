// esse state jo sabko(sare components) accessible ho 
import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "64bff2207e2e0de1b1785b7b",
          "user": "64bec3655475ae669040dbe3",
          "title": "First New post",
          "description": "Hello this is my new first post",
          "tag": "personal",
          "date": "2023-07-25T16:02:40.034Z",
          "__v": 0
        },
        {
            "_id": "64bff2207e2e0de1b1785b7b",
            "user": "64bec3655475ae669040dbe3",
            "title": "First New post",
            "description": "Hello this is my new first post",
            "tag": "personal",
            "date": "2023-07-25T16:02:40.034Z",
            "__v": 0
        },
        {
            "_id": "64bff2207e2e0de1b1785b7b",
            "user": "64bec3655475ae669040dbe3",
            "title": "First New post",
            "description": "Hello this is my new first post",
            "tag": "personal",
            "date": "2023-07-25T16:02:40.034Z",
            "__v": 0
        },
        {
            "_id": "64bff2207e2e0de1b1785b7b",
            "user": "64bec3655475ae669040dbe3",
            "title": "First New post",
            "description": "Hello this is my new first post",
            "tag": "personal",
            "date": "2023-07-25T16:02:40.034Z",
            "__v": 0
        },
        {
            "_id": "64bff2207e2e0de1b1785b7b",
            "user": "64bec3655475ae669040dbe3",
            "title": "First New post",
            "description": "Hello this is my new first post",
            "tag": "personal",
            "date": "2023-07-25T16:02:40.034Z",
            "__v": 0
        },
        {
            "_id": "64bff2207e2e0de1b1785b7b",
            "user": "64bec3655475ae669040dbe3",
            "title": "First New post",
            "description": "Hello this is my new first post",
            "tag": "personal",
            "date": "2023-07-25T16:02:40.034Z",
            "__v": 0
        }
      ]

    const [notes, setNotes] = useState(notesInitial);


    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;