// esse state jo sabko(sare components) accessible ho 
import React from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const state = {
        "name": "Abhinay",
        "class": "6a"
    }
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;